# `dataAwsccDevopsguruNotificationChannel` Submodule <a name="`dataAwsccDevopsguruNotificationChannel` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsguruNotificationChannel <a name="DataAwsccDevopsguruNotificationChannel" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/devopsguru_notification_channel awscc_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

dataawsccdevopsgurunotificationchannel.NewDataAwsccDevopsguruNotificationChannel(scope Construct, id *string, config DataAwsccDevopsguruNotificationChannelConfig) DataAwsccDevopsguruNotificationChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig">DataAwsccDevopsguruNotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig">DataAwsccDevopsguruNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

dataawsccdevopsgurunotificationchannel.DataAwsccDevopsguruNotificationChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

dataawsccdevopsgurunotificationchannel.DataAwsccDevopsguruNotificationChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

dataawsccdevopsgurunotificationchannel.DataAwsccDevopsguruNotificationChannel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

dataawsccdevopsgurunotificationchannel.DataAwsccDevopsguruNotificationChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDevopsguruNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference">DataAwsccDevopsguruNotificationChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.notificationChannelId">NotificationChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.config"></a>

```go
func Config() DataAwsccDevopsguruNotificationChannelConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference">DataAwsccDevopsguruNotificationChannelConfigAOutputReference</a>

---

##### `NotificationChannelId`<sup>Required</sup> <a name="NotificationChannelId" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.notificationChannelId"></a>

```go
func NotificationChannelId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsguruNotificationChannelConfig <a name="DataAwsccDevopsguruNotificationChannelConfig" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

&dataawsccdevopsgurunotificationchannel.DataAwsccDevopsguruNotificationChannelConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/devopsguru_notification_channel#id DataAwsccDevopsguruNotificationChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsguruNotificationChannelConfigA <a name="DataAwsccDevopsguruNotificationChannelConfigA" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

&dataawsccdevopsgurunotificationchannel.DataAwsccDevopsguruNotificationChannelConfigA {

}
```


### DataAwsccDevopsguruNotificationChannelConfigFilters <a name="DataAwsccDevopsguruNotificationChannelConfigFilters" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

&dataawsccdevopsgurunotificationchannel.DataAwsccDevopsguruNotificationChannelConfigFilters {

}
```


### DataAwsccDevopsguruNotificationChannelConfigSns <a name="DataAwsccDevopsguruNotificationChannelConfigSns" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

&dataawsccdevopsgurunotificationchannel.DataAwsccDevopsguruNotificationChannelConfigSns {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsguruNotificationChannelConfigAOutputReference <a name="DataAwsccDevopsguruNotificationChannelConfigAOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

dataawsccdevopsgurunotificationchannel.NewDataAwsccDevopsguruNotificationChannelConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsguruNotificationChannelConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference">DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference">DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigA">DataAwsccDevopsguruNotificationChannelConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.filters"></a>

```go
func Filters() DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference">DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference</a>

---

##### `Sns`<sup>Required</sup> <a name="Sns" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.sns"></a>

```go
func Sns() DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference">DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsguruNotificationChannelConfigA
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigA">DataAwsccDevopsguruNotificationChannelConfigA</a>

---


### DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference <a name="DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

dataawsccdevopsgurunotificationchannel.NewDataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes">MessageTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.severities">Severities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFilters">DataAwsccDevopsguruNotificationChannelConfigFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageTypes`<sup>Required</sup> <a name="MessageTypes" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes"></a>

```go
func MessageTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.severities"></a>

```go
func Severities() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsguruNotificationChannelConfigFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigFilters">DataAwsccDevopsguruNotificationChannelConfigFilters</a>

---


### DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference <a name="DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsgurunotificationchannel"

dataawsccdevopsgurunotificationchannel.NewDataAwsccDevopsguruNotificationChannelConfigSnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSns">DataAwsccDevopsguruNotificationChannelConfigSns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsguruNotificationChannelConfigSns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruNotificationChannel.DataAwsccDevopsguruNotificationChannelConfigSns">DataAwsccDevopsguruNotificationChannelConfigSns</a>

---



