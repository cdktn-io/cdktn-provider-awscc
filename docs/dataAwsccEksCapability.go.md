# `dataAwsccEksCapability` Submodule <a name="`dataAwsccEksCapability` Submodule" id="@cdktn/provider-awscc.dataAwsccEksCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEksCapability <a name="DataAwsccEksCapability" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/eks_capability awscc_eks_capability}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapability(scope Construct, id *string, config DataAwsccEksCapabilityConfig) DataAwsccEksCapability
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig">DataAwsccEksCapabilityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig">DataAwsccEksCapabilityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEksCapability resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.DataAwsccEksCapability_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.DataAwsccEksCapability_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.DataAwsccEksCapability_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.DataAwsccEksCapability_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEksCapability resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEksCapability to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEksCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/eks_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEksCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.capabilityName">CapabilityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference">DataAwsccEksCapabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.deletePropagationPolicy">DeletePropagationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList">DataAwsccEksCapabilityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CapabilityName`<sup>Required</sup> <a name="CapabilityName" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.capabilityName"></a>

```go
func CapabilityName() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.configuration"></a>

```go
func Configuration() DataAwsccEksCapabilityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference">DataAwsccEksCapabilityConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeletePropagationPolicy`<sup>Required</sup> <a name="DeletePropagationPolicy" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.deletePropagationPolicy"></a>

```go
func DeletePropagationPolicy() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.tags"></a>

```go
func Tags() DataAwsccEksCapabilityTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList">DataAwsccEksCapabilityTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEksCapabilityConfig <a name="DataAwsccEksCapabilityConfig" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

&dataawsccekscapability.DataAwsccEksCapabilityConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/eks_capability#id DataAwsccEksCapability#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEksCapabilityConfiguration <a name="DataAwsccEksCapabilityConfiguration" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

&dataawsccekscapability.DataAwsccEksCapabilityConfiguration {

}
```


### DataAwsccEksCapabilityConfigurationArgoCd <a name="DataAwsccEksCapabilityConfigurationArgoCd" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

&dataawsccekscapability.DataAwsccEksCapabilityConfigurationArgoCd {

}
```


### DataAwsccEksCapabilityConfigurationArgoCdAwsIdc <a name="DataAwsccEksCapabilityConfigurationArgoCdAwsIdc" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

&dataawsccekscapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdc {

}
```


### DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess <a name="DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

&dataawsccekscapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess {

}
```


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

&dataawsccekscapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings {

}
```


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

&dataawsccekscapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities {

}
```


### DataAwsccEksCapabilityTags <a name="DataAwsccEksCapabilityTags" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

&dataawsccekscapability.DataAwsccEksCapabilityTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference <a name="DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn">IdcManagedApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion">IdcRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdc">DataAwsccEksCapabilityConfigurationArgoCdAwsIdc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn"></a>

```go
func IdcInstanceArn() *string
```

- *Type:* *string

---

##### `IdcManagedApplicationArn`<sup>Required</sup> <a name="IdcManagedApplicationArn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn"></a>

```go
func IdcManagedApplicationArn() *string
```

- *Type:* *string

---

##### `IdcRegion`<sup>Required</sup> <a name="IdcRegion" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion"></a>

```go
func IdcRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksCapabilityConfigurationArgoCdAwsIdc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdc">DataAwsccEksCapabilityConfigurationArgoCdAwsIdc</a>

---


### DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference <a name="DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds">VpceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess">DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpceIds`<sup>Required</sup> <a name="VpceIds" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds"></a>

```go
func VpceIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess">DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess</a>

---


### DataAwsccEksCapabilityConfigurationArgoCdOutputReference <a name="DataAwsccEksCapabilityConfigurationArgoCdOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapabilityConfigurationArgoCdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksCapabilityConfigurationArgoCdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.awsIdc">AwsIdc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference">DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.networkAccess">NetworkAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference">DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappings">RbacRoleMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.serverUrl">ServerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCd">DataAwsccEksCapabilityConfigurationArgoCd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsIdc`<sup>Required</sup> <a name="AwsIdc" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.awsIdc"></a>

```go
func AwsIdc() DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference">DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NetworkAccess`<sup>Required</sup> <a name="NetworkAccess" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.networkAccess"></a>

```go
func NetworkAccess() DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference">DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference</a>

---

##### `RbacRoleMappings`<sup>Required</sup> <a name="RbacRoleMappings" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappings"></a>

```go
func RbacRoleMappings() DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList</a>

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.serverUrl"></a>

```go
func ServerUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksCapabilityConfigurationArgoCd
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCd">DataAwsccEksCapabilityConfigurationArgoCd</a>

---


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get"></a>

```go
func Get(index *f64) DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a>

---


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.get"></a>

```go
func Get(index *f64) DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identities">Identities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identities"></a>

```go
func Identities() DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings</a>

---


### DataAwsccEksCapabilityConfigurationOutputReference <a name="DataAwsccEksCapabilityConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapabilityConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksCapabilityConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.ack">Ack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.argoCd">ArgoCd</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference">DataAwsccEksCapabilityConfigurationArgoCdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfiguration">DataAwsccEksCapabilityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ack`<sup>Required</sup> <a name="Ack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.ack"></a>

```go
func Ack() *string
```

- *Type:* *string

---

##### `ArgoCd`<sup>Required</sup> <a name="ArgoCd" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.argoCd"></a>

```go
func ArgoCd() DataAwsccEksCapabilityConfigurationArgoCdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference">DataAwsccEksCapabilityConfigurationArgoCdOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksCapabilityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfiguration">DataAwsccEksCapabilityConfiguration</a>

---


### DataAwsccEksCapabilityTagsList <a name="DataAwsccEksCapabilityTagsList" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapabilityTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEksCapabilityTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEksCapabilityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEksCapabilityTagsOutputReference <a name="DataAwsccEksCapabilityTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscapability"

dataawsccekscapability.NewDataAwsccEksCapabilityTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEksCapabilityTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTags">DataAwsccEksCapabilityTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksCapabilityTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTags">DataAwsccEksCapabilityTags</a>

---



