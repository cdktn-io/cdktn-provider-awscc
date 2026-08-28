# `dataAwsccIotwirelessServiceProfile` Submodule <a name="`dataAwsccIotwirelessServiceProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessServiceProfile <a name="DataAwsccIotwirelessServiceProfile" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_service_profile awscc_iotwireless_service_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

dataawscciotwirelessserviceprofile.NewDataAwsccIotwirelessServiceProfile(scope Construct, id *string, config DataAwsccIotwirelessServiceProfileConfig) DataAwsccIotwirelessServiceProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig">DataAwsccIotwirelessServiceProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig">DataAwsccIotwirelessServiceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessServiceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

dataawscciotwirelessserviceprofile.DataAwsccIotwirelessServiceProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

dataawscciotwirelessserviceprofile.DataAwsccIotwirelessServiceProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

dataawscciotwirelessserviceprofile.DataAwsccIotwirelessServiceProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

dataawscciotwirelessserviceprofile.DataAwsccIotwirelessServiceProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotwirelessServiceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotwirelessServiceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotwirelessServiceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_service_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessServiceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference">DataAwsccIotwirelessServiceProfileLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.serviceProfileId">ServiceProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList">DataAwsccIotwirelessServiceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.loRaWan"></a>

```go
func LoRaWan() DataAwsccIotwirelessServiceProfileLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference">DataAwsccIotwirelessServiceProfileLoRaWanOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceProfileId`<sup>Required</sup> <a name="ServiceProfileId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.serviceProfileId"></a>

```go
func ServiceProfileId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tags"></a>

```go
func Tags() DataAwsccIotwirelessServiceProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList">DataAwsccIotwirelessServiceProfileTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessServiceProfileConfig <a name="DataAwsccIotwirelessServiceProfileConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

&dataawscciotwirelessserviceprofile.DataAwsccIotwirelessServiceProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_service_profile#id DataAwsccIotwirelessServiceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessServiceProfileLoRaWan <a name="DataAwsccIotwirelessServiceProfileLoRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

&dataawscciotwirelessserviceprofile.DataAwsccIotwirelessServiceProfileLoRaWan {

}
```


### DataAwsccIotwirelessServiceProfileTags <a name="DataAwsccIotwirelessServiceProfileTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

&dataawscciotwirelessserviceprofile.DataAwsccIotwirelessServiceProfileTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessServiceProfileLoRaWanOutputReference <a name="DataAwsccIotwirelessServiceProfileLoRaWanOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

dataawscciotwirelessserviceprofile.NewDataAwsccIotwirelessServiceProfileLoRaWanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessServiceProfileLoRaWanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadata">AddGwMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.channelMask">ChannelMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.devStatusReqFreq">DevStatusReqFreq</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlBucketSize">DlBucketSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRate">DlRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRatePolicy">DlRatePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMax">DrMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMin">DrMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.hrAllowed">HrAllowed</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.minGwDiversity">MinGwDiversity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.nwkGeoLoc">NwkGeoLoc</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.prAllowed">PrAllowed</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.raAllowed">RaAllowed</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusBattery">ReportDevStatusBattery</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusMargin">ReportDevStatusMargin</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.targetPer">TargetPer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulBucketSize">UlBucketSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRate">UlRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRatePolicy">UlRatePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan">DataAwsccIotwirelessServiceProfileLoRaWan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddGwMetadata`<sup>Required</sup> <a name="AddGwMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadata"></a>

```go
func AddGwMetadata() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ChannelMask`<sup>Required</sup> <a name="ChannelMask" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.channelMask"></a>

```go
func ChannelMask() *string
```

- *Type:* *string

---

##### `DevStatusReqFreq`<sup>Required</sup> <a name="DevStatusReqFreq" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.devStatusReqFreq"></a>

```go
func DevStatusReqFreq() *f64
```

- *Type:* *f64

---

##### `DlBucketSize`<sup>Required</sup> <a name="DlBucketSize" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlBucketSize"></a>

```go
func DlBucketSize() *f64
```

- *Type:* *f64

---

##### `DlRate`<sup>Required</sup> <a name="DlRate" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRate"></a>

```go
func DlRate() *f64
```

- *Type:* *f64

---

##### `DlRatePolicy`<sup>Required</sup> <a name="DlRatePolicy" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRatePolicy"></a>

```go
func DlRatePolicy() *string
```

- *Type:* *string

---

##### `DrMax`<sup>Required</sup> <a name="DrMax" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMax"></a>

```go
func DrMax() *f64
```

- *Type:* *f64

---

##### `DrMin`<sup>Required</sup> <a name="DrMin" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMin"></a>

```go
func DrMin() *f64
```

- *Type:* *f64

---

##### `HrAllowed`<sup>Required</sup> <a name="HrAllowed" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.hrAllowed"></a>

```go
func HrAllowed() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MinGwDiversity`<sup>Required</sup> <a name="MinGwDiversity" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.minGwDiversity"></a>

```go
func MinGwDiversity() *f64
```

- *Type:* *f64

---

##### `NwkGeoLoc`<sup>Required</sup> <a name="NwkGeoLoc" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.nwkGeoLoc"></a>

```go
func NwkGeoLoc() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PrAllowed`<sup>Required</sup> <a name="PrAllowed" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.prAllowed"></a>

```go
func PrAllowed() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RaAllowed`<sup>Required</sup> <a name="RaAllowed" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.raAllowed"></a>

```go
func RaAllowed() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReportDevStatusBattery`<sup>Required</sup> <a name="ReportDevStatusBattery" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusBattery"></a>

```go
func ReportDevStatusBattery() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReportDevStatusMargin`<sup>Required</sup> <a name="ReportDevStatusMargin" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusMargin"></a>

```go
func ReportDevStatusMargin() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TargetPer`<sup>Required</sup> <a name="TargetPer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.targetPer"></a>

```go
func TargetPer() *f64
```

- *Type:* *f64

---

##### `UlBucketSize`<sup>Required</sup> <a name="UlBucketSize" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulBucketSize"></a>

```go
func UlBucketSize() *f64
```

- *Type:* *f64

---

##### `UlRate`<sup>Required</sup> <a name="UlRate" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRate"></a>

```go
func UlRate() *f64
```

- *Type:* *f64

---

##### `UlRatePolicy`<sup>Required</sup> <a name="UlRatePolicy" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRatePolicy"></a>

```go
func UlRatePolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessServiceProfileLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan">DataAwsccIotwirelessServiceProfileLoRaWan</a>

---


### DataAwsccIotwirelessServiceProfileTagsList <a name="DataAwsccIotwirelessServiceProfileTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

dataawscciotwirelessserviceprofile.NewDataAwsccIotwirelessServiceProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotwirelessServiceProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotwirelessServiceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotwirelessServiceProfileTagsOutputReference <a name="DataAwsccIotwirelessServiceProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessserviceprofile"

dataawscciotwirelessserviceprofile.NewDataAwsccIotwirelessServiceProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotwirelessServiceProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags">DataAwsccIotwirelessServiceProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessServiceProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags">DataAwsccIotwirelessServiceProfileTags</a>

---



