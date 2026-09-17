# `dataAwsccConfigDeliveryChannel` Submodule <a name="`dataAwsccConfigDeliveryChannel` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigDeliveryChannel <a name="DataAwsccConfigDeliveryChannel" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/config_delivery_channel awscc_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigdeliverychannel"

dataawsccconfigdeliverychannel.NewDataAwsccConfigDeliveryChannel(scope Construct, id *string, config DataAwsccConfigDeliveryChannelConfig) DataAwsccConfigDeliveryChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig">DataAwsccConfigDeliveryChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig">DataAwsccConfigDeliveryChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConfigDeliveryChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigdeliverychannel"

dataawsccconfigdeliverychannel.DataAwsccConfigDeliveryChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigdeliverychannel"

dataawsccconfigdeliverychannel.DataAwsccConfigDeliveryChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigdeliverychannel"

dataawsccconfigdeliverychannel.DataAwsccConfigDeliveryChannel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigdeliverychannel"

dataawsccconfigdeliverychannel.DataAwsccConfigDeliveryChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccConfigDeliveryChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccConfigDeliveryChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccConfigDeliveryChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/config_delivery_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigDeliveryChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.configSnapshotDeliveryProperties">ConfigSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KmsKeyArn">S3KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ConfigSnapshotDeliveryProperties`<sup>Required</sup> <a name="ConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.configSnapshotDeliveryProperties"></a>

```go
func ConfigSnapshotDeliveryProperties() DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `S3KmsKeyArn`<sup>Required</sup> <a name="S3KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```go
func S3KmsKeyArn() *string
```

- *Type:* *string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigDeliveryChannelConfig <a name="DataAwsccConfigDeliveryChannelConfig" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigdeliverychannel"

&dataawsccconfigdeliverychannel.DataAwsccConfigDeliveryChannelConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/config_delivery_channel#id DataAwsccConfigDeliveryChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties <a name="DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigdeliverychannel"

&dataawsccconfigdeliverychannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference <a name="DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigdeliverychannel"

dataawsccconfigdeliverychannel.NewDataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">DeliveryFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryFrequency`<sup>Required</sup> <a name="DeliveryFrequency" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```go
func DeliveryFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---



