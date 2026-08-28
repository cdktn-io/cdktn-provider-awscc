# `dataAwsccB2BiCapability` Submodule <a name="`dataAwsccB2BiCapability` Submodule" id="@cdktn/provider-awscc.dataAwsccB2BiCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccB2BiCapability <a name="DataAwsccB2BiCapability" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/b2bi_capability awscc_b2bi_capability}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapability(scope Construct, id *string, config DataAwsccB2BiCapabilityConfig) DataAwsccB2BiCapability
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig">DataAwsccB2BiCapabilityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig">DataAwsccB2BiCapabilityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccB2BiCapability resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.DataAwsccB2BiCapability_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.DataAwsccB2BiCapability_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.DataAwsccB2BiCapability_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.DataAwsccB2BiCapability_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccB2BiCapability resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccB2BiCapability to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccB2BiCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/b2bi_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccB2BiCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.capabilityArn">CapabilityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.capabilityId">CapabilityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference">DataAwsccB2BiCapabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.instructionsDocuments">InstructionsDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList">DataAwsccB2BiCapabilityInstructionsDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList">DataAwsccB2BiCapabilityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CapabilityArn`<sup>Required</sup> <a name="CapabilityArn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.capabilityArn"></a>

```go
func CapabilityArn() *string
```

- *Type:* *string

---

##### `CapabilityId`<sup>Required</sup> <a name="CapabilityId" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.capabilityId"></a>

```go
func CapabilityId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.configuration"></a>

```go
func Configuration() DataAwsccB2BiCapabilityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference">DataAwsccB2BiCapabilityConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `InstructionsDocuments`<sup>Required</sup> <a name="InstructionsDocuments" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.instructionsDocuments"></a>

```go
func InstructionsDocuments() DataAwsccB2BiCapabilityInstructionsDocumentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList">DataAwsccB2BiCapabilityInstructionsDocumentsList</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.tags"></a>

```go
func Tags() DataAwsccB2BiCapabilityTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList">DataAwsccB2BiCapabilityTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapability.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccB2BiCapabilityConfig <a name="DataAwsccB2BiCapabilityConfig" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

&dataawsccb2bicapability.DataAwsccB2BiCapabilityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/b2bi_capability#id DataAwsccB2BiCapability#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccB2BiCapabilityConfiguration <a name="DataAwsccB2BiCapabilityConfiguration" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

&dataawsccb2bicapability.DataAwsccB2BiCapabilityConfiguration {

}
```


### DataAwsccB2BiCapabilityConfigurationEdi <a name="DataAwsccB2BiCapabilityConfigurationEdi" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

&dataawsccb2bicapability.DataAwsccB2BiCapabilityConfigurationEdi {

}
```


### DataAwsccB2BiCapabilityConfigurationEdiInputLocation <a name="DataAwsccB2BiCapabilityConfigurationEdiInputLocation" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

&dataawsccb2bicapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocation {

}
```


### DataAwsccB2BiCapabilityConfigurationEdiOutputLocation <a name="DataAwsccB2BiCapabilityConfigurationEdiOutputLocation" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

&dataawsccb2bicapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocation {

}
```


### DataAwsccB2BiCapabilityConfigurationEdiType <a name="DataAwsccB2BiCapabilityConfigurationEdiType" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

&dataawsccb2bicapability.DataAwsccB2BiCapabilityConfigurationEdiType {

}
```


### DataAwsccB2BiCapabilityConfigurationEdiTypeX12Details <a name="DataAwsccB2BiCapabilityConfigurationEdiTypeX12Details" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12Details"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12Details.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

&dataawsccb2bicapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12Details {

}
```


### DataAwsccB2BiCapabilityInstructionsDocuments <a name="DataAwsccB2BiCapabilityInstructionsDocuments" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocuments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

&dataawsccb2bicapability.DataAwsccB2BiCapabilityInstructionsDocuments {

}
```


### DataAwsccB2BiCapabilityTags <a name="DataAwsccB2BiCapabilityTags" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

&dataawsccb2bicapability.DataAwsccB2BiCapabilityTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference <a name="DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocation">DataAwsccB2BiCapabilityConfigurationEdiInputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccB2BiCapabilityConfigurationEdiInputLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocation">DataAwsccB2BiCapabilityConfigurationEdiInputLocation</a>

---


### DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference <a name="DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocation">DataAwsccB2BiCapabilityConfigurationEdiOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccB2BiCapabilityConfigurationEdiOutputLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocation">DataAwsccB2BiCapabilityConfigurationEdiOutputLocation</a>

---


### DataAwsccB2BiCapabilityConfigurationEdiOutputReference <a name="DataAwsccB2BiCapabilityConfigurationEdiOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapabilityConfigurationEdiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccB2BiCapabilityConfigurationEdiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.capabilityDirection">CapabilityDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.inputLocation">InputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference">DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference">DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.transformerId">TransformerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.type">Type</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference">DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdi">DataAwsccB2BiCapabilityConfigurationEdi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapabilityDirection`<sup>Required</sup> <a name="CapabilityDirection" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.capabilityDirection"></a>

```go
func CapabilityDirection() *string
```

- *Type:* *string

---

##### `InputLocation`<sup>Required</sup> <a name="InputLocation" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.inputLocation"></a>

```go
func InputLocation() DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference">DataAwsccB2BiCapabilityConfigurationEdiInputLocationOutputReference</a>

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.outputLocation"></a>

```go
func OutputLocation() DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference">DataAwsccB2BiCapabilityConfigurationEdiOutputLocationOutputReference</a>

---

##### `TransformerId`<sup>Required</sup> <a name="TransformerId" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.transformerId"></a>

```go
func TransformerId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.type"></a>

```go
func Type() DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference">DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccB2BiCapabilityConfigurationEdi
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdi">DataAwsccB2BiCapabilityConfigurationEdi</a>

---


### DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference <a name="DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.property.x12Details">X12Details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference">DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiType">DataAwsccB2BiCapabilityConfigurationEdiType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `X12Details`<sup>Required</sup> <a name="X12Details" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.property.x12Details"></a>

```go
func X12Details() DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference">DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccB2BiCapabilityConfigurationEdiType
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiType">DataAwsccB2BiCapabilityConfigurationEdiType</a>

---


### DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference <a name="DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.transactionSet">TransactionSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12Details">DataAwsccB2BiCapabilityConfigurationEdiTypeX12Details</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TransactionSet`<sup>Required</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.transactionSet"></a>

```go
func TransactionSet() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccB2BiCapabilityConfigurationEdiTypeX12Details
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiTypeX12Details">DataAwsccB2BiCapabilityConfigurationEdiTypeX12Details</a>

---


### DataAwsccB2BiCapabilityConfigurationOutputReference <a name="DataAwsccB2BiCapabilityConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapabilityConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccB2BiCapabilityConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.property.edi">Edi</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference">DataAwsccB2BiCapabilityConfigurationEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfiguration">DataAwsccB2BiCapabilityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Edi`<sup>Required</sup> <a name="Edi" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.property.edi"></a>

```go
func Edi() DataAwsccB2BiCapabilityConfigurationEdiOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationEdiOutputReference">DataAwsccB2BiCapabilityConfigurationEdiOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccB2BiCapabilityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityConfiguration">DataAwsccB2BiCapabilityConfiguration</a>

---


### DataAwsccB2BiCapabilityInstructionsDocumentsList <a name="DataAwsccB2BiCapabilityInstructionsDocumentsList" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapabilityInstructionsDocumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccB2BiCapabilityInstructionsDocumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.get"></a>

```go
func Get(index *f64) DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference <a name="DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapabilityInstructionsDocumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocuments">DataAwsccB2BiCapabilityInstructionsDocuments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccB2BiCapabilityInstructionsDocuments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityInstructionsDocuments">DataAwsccB2BiCapabilityInstructionsDocuments</a>

---


### DataAwsccB2BiCapabilityTagsList <a name="DataAwsccB2BiCapabilityTagsList" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapabilityTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccB2BiCapabilityTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.get"></a>

```go
func Get(index *f64) DataAwsccB2BiCapabilityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccB2BiCapabilityTagsOutputReference <a name="DataAwsccB2BiCapabilityTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccb2bicapability"

dataawsccb2bicapability.NewDataAwsccB2BiCapabilityTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccB2BiCapabilityTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTags">DataAwsccB2BiCapabilityTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccB2BiCapabilityTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiCapability.DataAwsccB2BiCapabilityTags">DataAwsccB2BiCapabilityTags</a>

---



