# `dataAwsccGameliftFleet` Submodule <a name="`dataAwsccGameliftFleet` Submodule" id="@cdktn/provider-awscc.dataAwsccGameliftFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGameliftFleet <a name="DataAwsccGameliftFleet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/gamelift_fleet awscc_gamelift_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleet(scope Construct, id *string, config DataAwsccGameliftFleetConfig) DataAwsccGameliftFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig">DataAwsccGameliftFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig">DataAwsccGameliftFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGameliftFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.DataAwsccGameliftFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.DataAwsccGameliftFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.DataAwsccGameliftFleet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.DataAwsccGameliftFleet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGameliftFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGameliftFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGameliftFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/gamelift_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGameliftFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.anywhereConfiguration">AnywhereConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference">DataAwsccGameliftFleetAnywhereConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.applyCapacity">ApplyCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.buildId">BuildId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.certificateConfiguration">CertificateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference">DataAwsccGameliftFleetCertificateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.computeType">ComputeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.desiredEc2Instances">DesiredEc2Instances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.ec2InboundPermissions">Ec2InboundPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList">DataAwsccGameliftFleetEc2InboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.ec2InstanceType">Ec2InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.fleetArn">FleetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.fleetType">FleetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.instanceRoleCredentialsProvider">InstanceRoleCredentialsProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.locations">Locations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList">DataAwsccGameliftFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.logPaths">LogPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.maxSize">MaxSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.metricGroups">MetricGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.minSize">MinSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.newGameSessionProtectionPolicy">NewGameSessionProtectionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.peerVpcAwsAccountId">PeerVpcAwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.peerVpcId">PeerVpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.playerGatewayConfiguration">PlayerGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference">DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.playerGatewayMode">PlayerGatewayMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.resourceCreationLimitPolicy">ResourceCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference">DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.runtimeConfiguration">RuntimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference">DataAwsccGameliftFleetRuntimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.scalingPolicies">ScalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList">DataAwsccGameliftFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.scriptId">ScriptId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.serverLaunchParameters">ServerLaunchParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.serverLaunchPath">ServerLaunchPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList">DataAwsccGameliftFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AnywhereConfiguration`<sup>Required</sup> <a name="AnywhereConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.anywhereConfiguration"></a>

```go
func AnywhereConfiguration() DataAwsccGameliftFleetAnywhereConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference">DataAwsccGameliftFleetAnywhereConfigurationOutputReference</a>

---

##### `ApplyCapacity`<sup>Required</sup> <a name="ApplyCapacity" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.applyCapacity"></a>

```go
func ApplyCapacity() *string
```

- *Type:* *string

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.buildId"></a>

```go
func BuildId() *string
```

- *Type:* *string

---

##### `CertificateConfiguration`<sup>Required</sup> <a name="CertificateConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.certificateConfiguration"></a>

```go
func CertificateConfiguration() DataAwsccGameliftFleetCertificateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference">DataAwsccGameliftFleetCertificateConfigurationOutputReference</a>

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.computeType"></a>

```go
func ComputeType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DesiredEc2Instances`<sup>Required</sup> <a name="DesiredEc2Instances" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.desiredEc2Instances"></a>

```go
func DesiredEc2Instances() *f64
```

- *Type:* *f64

---

##### `Ec2InboundPermissions`<sup>Required</sup> <a name="Ec2InboundPermissions" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.ec2InboundPermissions"></a>

```go
func Ec2InboundPermissions() DataAwsccGameliftFleetEc2InboundPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList">DataAwsccGameliftFleetEc2InboundPermissionsList</a>

---

##### `Ec2InstanceType`<sup>Required</sup> <a name="Ec2InstanceType" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.ec2InstanceType"></a>

```go
func Ec2InstanceType() *string
```

- *Type:* *string

---

##### `FleetArn`<sup>Required</sup> <a name="FleetArn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.fleetArn"></a>

```go
func FleetArn() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `FleetType`<sup>Required</sup> <a name="FleetType" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.fleetType"></a>

```go
func FleetType() *string
```

- *Type:* *string

---

##### `InstanceRoleArn`<sup>Required</sup> <a name="InstanceRoleArn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.instanceRoleArn"></a>

```go
func InstanceRoleArn() *string
```

- *Type:* *string

---

##### `InstanceRoleCredentialsProvider`<sup>Required</sup> <a name="InstanceRoleCredentialsProvider" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.instanceRoleCredentialsProvider"></a>

```go
func InstanceRoleCredentialsProvider() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.locations"></a>

```go
func Locations() DataAwsccGameliftFleetLocationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList">DataAwsccGameliftFleetLocationsList</a>

---

##### `LogPaths`<sup>Required</sup> <a name="LogPaths" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.logPaths"></a>

```go
func LogPaths() *[]*string
```

- *Type:* *[]*string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.maxSize"></a>

```go
func MaxSize() *f64
```

- *Type:* *f64

---

##### `MetricGroups`<sup>Required</sup> <a name="MetricGroups" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.metricGroups"></a>

```go
func MetricGroups() *[]*string
```

- *Type:* *[]*string

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.minSize"></a>

```go
func MinSize() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NewGameSessionProtectionPolicy`<sup>Required</sup> <a name="NewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.newGameSessionProtectionPolicy"></a>

```go
func NewGameSessionProtectionPolicy() *string
```

- *Type:* *string

---

##### `PeerVpcAwsAccountId`<sup>Required</sup> <a name="PeerVpcAwsAccountId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.peerVpcAwsAccountId"></a>

```go
func PeerVpcAwsAccountId() *string
```

- *Type:* *string

---

##### `PeerVpcId`<sup>Required</sup> <a name="PeerVpcId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.peerVpcId"></a>

```go
func PeerVpcId() *string
```

- *Type:* *string

---

##### `PlayerGatewayConfiguration`<sup>Required</sup> <a name="PlayerGatewayConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.playerGatewayConfiguration"></a>

```go
func PlayerGatewayConfiguration() DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference">DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference</a>

---

##### `PlayerGatewayMode`<sup>Required</sup> <a name="PlayerGatewayMode" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.playerGatewayMode"></a>

```go
func PlayerGatewayMode() *string
```

- *Type:* *string

---

##### `ResourceCreationLimitPolicy`<sup>Required</sup> <a name="ResourceCreationLimitPolicy" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.resourceCreationLimitPolicy"></a>

```go
func ResourceCreationLimitPolicy() DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference">DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference</a>

---

##### `RuntimeConfiguration`<sup>Required</sup> <a name="RuntimeConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.runtimeConfiguration"></a>

```go
func RuntimeConfiguration() DataAwsccGameliftFleetRuntimeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference">DataAwsccGameliftFleetRuntimeConfigurationOutputReference</a>

---

##### `ScalingPolicies`<sup>Required</sup> <a name="ScalingPolicies" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.scalingPolicies"></a>

```go
func ScalingPolicies() DataAwsccGameliftFleetScalingPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList">DataAwsccGameliftFleetScalingPoliciesList</a>

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.scriptId"></a>

```go
func ScriptId() *string
```

- *Type:* *string

---

##### `ServerLaunchParameters`<sup>Required</sup> <a name="ServerLaunchParameters" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.serverLaunchParameters"></a>

```go
func ServerLaunchParameters() *string
```

- *Type:* *string

---

##### `ServerLaunchPath`<sup>Required</sup> <a name="ServerLaunchPath" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.serverLaunchPath"></a>

```go
func ServerLaunchPath() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.tags"></a>

```go
func Tags() DataAwsccGameliftFleetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList">DataAwsccGameliftFleetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGameliftFleetAnywhereConfiguration <a name="DataAwsccGameliftFleetAnywhereConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetAnywhereConfiguration {

}
```


### DataAwsccGameliftFleetCertificateConfiguration <a name="DataAwsccGameliftFleetCertificateConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetCertificateConfiguration {

}
```


### DataAwsccGameliftFleetConfig <a name="DataAwsccGameliftFleetConfig" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/gamelift_fleet#id DataAwsccGameliftFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGameliftFleetEc2InboundPermissions <a name="DataAwsccGameliftFleetEc2InboundPermissions" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetEc2InboundPermissions {

}
```


### DataAwsccGameliftFleetLocations <a name="DataAwsccGameliftFleetLocations" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetLocations {

}
```


### DataAwsccGameliftFleetLocationsLocationCapacity <a name="DataAwsccGameliftFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetLocationsLocationCapacity {

}
```


### DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration {

}
```


### DataAwsccGameliftFleetPlayerGatewayConfiguration <a name="DataAwsccGameliftFleetPlayerGatewayConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetPlayerGatewayConfiguration {

}
```


### DataAwsccGameliftFleetResourceCreationLimitPolicy <a name="DataAwsccGameliftFleetResourceCreationLimitPolicy" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetResourceCreationLimitPolicy {

}
```


### DataAwsccGameliftFleetRuntimeConfiguration <a name="DataAwsccGameliftFleetRuntimeConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetRuntimeConfiguration {

}
```


### DataAwsccGameliftFleetRuntimeConfigurationServerProcesses <a name="DataAwsccGameliftFleetRuntimeConfigurationServerProcesses" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcesses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcesses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcesses {

}
```


### DataAwsccGameliftFleetScalingPolicies <a name="DataAwsccGameliftFleetScalingPolicies" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetScalingPolicies {

}
```


### DataAwsccGameliftFleetScalingPoliciesTargetConfiguration <a name="DataAwsccGameliftFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetScalingPoliciesTargetConfiguration {

}
```


### DataAwsccGameliftFleetTags <a name="DataAwsccGameliftFleetTags" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

&dataawsccgameliftfleet.DataAwsccGameliftFleetTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGameliftFleetAnywhereConfigurationOutputReference <a name="DataAwsccGameliftFleetAnywhereConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetAnywhereConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftFleetAnywhereConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.property.cost">Cost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfiguration">DataAwsccGameliftFleetAnywhereConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cost`<sup>Required</sup> <a name="Cost" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.property.cost"></a>

```go
func Cost() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetAnywhereConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetAnywhereConfiguration">DataAwsccGameliftFleetAnywhereConfiguration</a>

---


### DataAwsccGameliftFleetCertificateConfigurationOutputReference <a name="DataAwsccGameliftFleetCertificateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetCertificateConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftFleetCertificateConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.property.certificateType">CertificateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfiguration">DataAwsccGameliftFleetCertificateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.property.certificateType"></a>

```go
func CertificateType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetCertificateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetCertificateConfiguration">DataAwsccGameliftFleetCertificateConfiguration</a>

---


### DataAwsccGameliftFleetEc2InboundPermissionsList <a name="DataAwsccGameliftFleetEc2InboundPermissionsList" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetEc2InboundPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftFleetEc2InboundPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftFleetEc2InboundPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftFleetEc2InboundPermissionsOutputReference <a name="DataAwsccGameliftFleetEc2InboundPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetEc2InboundPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftFleetEc2InboundPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissions">DataAwsccGameliftFleetEc2InboundPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetEc2InboundPermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetEc2InboundPermissions">DataAwsccGameliftFleetEc2InboundPermissions</a>

---


### DataAwsccGameliftFleetLocationsList <a name="DataAwsccGameliftFleetLocationsList" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftFleetLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftFleetLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">ScaleInAfterInactivityMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">ZeroCapacityStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleInAfterInactivityMinutes`<sup>Required</sup> <a name="ScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```go
func ScaleInAfterInactivityMinutes() *f64
```

- *Type:* *f64

---

##### `ZeroCapacityStrategy`<sup>Required</sup> <a name="ZeroCapacityStrategy" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```go
func ZeroCapacityStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### DataAwsccGameliftFleetLocationsLocationCapacityOutputReference <a name="DataAwsccGameliftFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetLocationsLocationCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftFleetLocationsLocationCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">DesiredEc2Instances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">ManagedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.maxSize">MaxSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.minSize">MinSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacity">DataAwsccGameliftFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredEc2Instances`<sup>Required</sup> <a name="DesiredEc2Instances" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```go
func DesiredEc2Instances() *f64
```

- *Type:* *f64

---

##### `ManagedCapacityConfiguration`<sup>Required</sup> <a name="ManagedCapacityConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```go
func ManagedCapacityConfiguration() DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```go
func MaxSize() *f64
```

- *Type:* *f64

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```go
func MinSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetLocationsLocationCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacity">DataAwsccGameliftFleetLocationsLocationCapacity</a>

---


### DataAwsccGameliftFleetLocationsOutputReference <a name="DataAwsccGameliftFleetLocationsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftFleetLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.locationCapacity">LocationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference">DataAwsccGameliftFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.playerGatewayStatus">PlayerGatewayStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocations">DataAwsccGameliftFleetLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LocationCapacity`<sup>Required</sup> <a name="LocationCapacity" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.locationCapacity"></a>

```go
func LocationCapacity() DataAwsccGameliftFleetLocationsLocationCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsLocationCapacityOutputReference">DataAwsccGameliftFleetLocationsLocationCapacityOutputReference</a>

---

##### `PlayerGatewayStatus`<sup>Required</sup> <a name="PlayerGatewayStatus" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```go
func PlayerGatewayStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetLocations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetLocations">DataAwsccGameliftFleetLocations</a>

---


### DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference <a name="DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupported">GameServerIpProtocolSupported</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfiguration">DataAwsccGameliftFleetPlayerGatewayConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GameServerIpProtocolSupported`<sup>Required</sup> <a name="GameServerIpProtocolSupported" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupported"></a>

```go
func GameServerIpProtocolSupported() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetPlayerGatewayConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetPlayerGatewayConfiguration">DataAwsccGameliftFleetPlayerGatewayConfiguration</a>

---


### DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference <a name="DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">NewGameSessionsPerCreator</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">PolicyPeriodInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicy">DataAwsccGameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewGameSessionsPerCreator`<sup>Required</sup> <a name="NewGameSessionsPerCreator" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```go
func NewGameSessionsPerCreator() *f64
```

- *Type:* *f64

---

##### `PolicyPeriodInMinutes`<sup>Required</sup> <a name="PolicyPeriodInMinutes" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```go
func PolicyPeriodInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetResourceCreationLimitPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetResourceCreationLimitPolicy">DataAwsccGameliftFleetResourceCreationLimitPolicy</a>

---


### DataAwsccGameliftFleetRuntimeConfigurationOutputReference <a name="DataAwsccGameliftFleetRuntimeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetRuntimeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftFleetRuntimeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds">GameSessionActivationTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations">MaxConcurrentGameSessionActivations</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.serverProcesses">ServerProcesses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList">DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfiguration">DataAwsccGameliftFleetRuntimeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GameSessionActivationTimeoutSeconds`<sup>Required</sup> <a name="GameSessionActivationTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds"></a>

```go
func GameSessionActivationTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentGameSessionActivations`<sup>Required</sup> <a name="MaxConcurrentGameSessionActivations" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations"></a>

```go
func MaxConcurrentGameSessionActivations() *f64
```

- *Type:* *f64

---

##### `ServerProcesses`<sup>Required</sup> <a name="ServerProcesses" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.serverProcesses"></a>

```go
func ServerProcesses() DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList">DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetRuntimeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfiguration">DataAwsccGameliftFleetRuntimeConfiguration</a>

---


### DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList <a name="DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetRuntimeConfigurationServerProcessesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference <a name="DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutions">ConcurrentExecutions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPath">LaunchPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcesses">DataAwsccGameliftFleetRuntimeConfigurationServerProcesses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConcurrentExecutions`<sup>Required</sup> <a name="ConcurrentExecutions" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutions"></a>

```go
func ConcurrentExecutions() *f64
```

- *Type:* *f64

---

##### `LaunchPath`<sup>Required</sup> <a name="LaunchPath" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPath"></a>

```go
func LaunchPath() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetRuntimeConfigurationServerProcesses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetRuntimeConfigurationServerProcesses">DataAwsccGameliftFleetRuntimeConfigurationServerProcesses</a>

---


### DataAwsccGameliftFleetScalingPoliciesList <a name="DataAwsccGameliftFleetScalingPoliciesList" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetScalingPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftFleetScalingPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftFleetScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftFleetScalingPoliciesOutputReference <a name="DataAwsccGameliftFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetScalingPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftFleetScalingPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.scalingAdjustment">ScalingAdjustment</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">ScalingAdjustmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.targetConfiguration">TargetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference">DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.updateStatus">UpdateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPolicies">DataAwsccGameliftFleetScalingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```go
func EvaluationPeriods() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `ScalingAdjustment`<sup>Required</sup> <a name="ScalingAdjustment" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```go
func ScalingAdjustment() *f64
```

- *Type:* *f64

---

##### `ScalingAdjustmentType`<sup>Required</sup> <a name="ScalingAdjustmentType" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```go
func ScalingAdjustmentType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TargetConfiguration`<sup>Required</sup> <a name="TargetConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```go
func TargetConfiguration() DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference">DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `UpdateStatus`<sup>Required</sup> <a name="UpdateStatus" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.updateStatus"></a>

```go
func UpdateStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetScalingPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPolicies">DataAwsccGameliftFleetScalingPolicies</a>

---


### DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference <a name="DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfiguration">DataAwsccGameliftFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetScalingPoliciesTargetConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetScalingPoliciesTargetConfiguration">DataAwsccGameliftFleetScalingPoliciesTargetConfiguration</a>

---


### DataAwsccGameliftFleetTagsList <a name="DataAwsccGameliftFleetTagsList" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftFleetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftFleetTagsOutputReference <a name="DataAwsccGameliftFleetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftfleet"

dataawsccgameliftfleet.NewDataAwsccGameliftFleetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftFleetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTags">DataAwsccGameliftFleetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftFleetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftFleet.DataAwsccGameliftFleetTags">DataAwsccGameliftFleetTags</a>

---



