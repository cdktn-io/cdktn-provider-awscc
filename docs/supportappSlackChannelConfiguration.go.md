# `supportappSlackChannelConfiguration` Submodule <a name="`supportappSlackChannelConfiguration` Submodule" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportappSlackChannelConfiguration <a name="SupportappSlackChannelConfiguration" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_channel_configuration awscc_supportapp_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportappslackchannelconfiguration"

supportappslackchannelconfiguration.NewSupportappSlackChannelConfiguration(scope Construct, id *string, config SupportappSlackChannelConfigurationConfig) SupportappSlackChannelConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig">SupportappSlackChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig">SupportappSlackChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnAddCorrespondenceToCase">ResetNotifyOnAddCorrespondenceToCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnCreateOrReopenCase">ResetNotifyOnCreateOrReopenCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnResolveCase">ResetNotifyOnResolveCase</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetChannelName"></a>

```go
func ResetChannelName()
```

##### `ResetNotifyOnAddCorrespondenceToCase` <a name="ResetNotifyOnAddCorrespondenceToCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnAddCorrespondenceToCase"></a>

```go
func ResetNotifyOnAddCorrespondenceToCase()
```

##### `ResetNotifyOnCreateOrReopenCase` <a name="ResetNotifyOnCreateOrReopenCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnCreateOrReopenCase"></a>

```go
func ResetNotifyOnCreateOrReopenCase()
```

##### `ResetNotifyOnResolveCase` <a name="ResetNotifyOnResolveCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnResolveCase"></a>

```go
func ResetNotifyOnResolveCase()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportappslackchannelconfiguration"

supportappslackchannelconfiguration.SupportappSlackChannelConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportappslackchannelconfiguration"

supportappslackchannelconfiguration.SupportappSlackChannelConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportappslackchannelconfiguration"

supportappslackchannelconfiguration.SupportappSlackChannelConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportappslackchannelconfiguration"

supportappslackchannelconfiguration.SupportappSlackChannelConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SupportappSlackChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SupportappSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SupportappSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelIdInput">ChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArnInput">ChannelRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCaseInput">NotifyOnAddCorrespondenceToCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverityInput">NotifyOnCaseSeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCaseInput">NotifyOnCreateOrReopenCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCaseInput">NotifyOnResolveCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArn">ChannelRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCase">NotifyOnAddCorrespondenceToCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverity">NotifyOnCaseSeverity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCase">NotifyOnCreateOrReopenCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCase">NotifyOnResolveCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelIdInput"></a>

```go
func ChannelIdInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `ChannelRoleArnInput`<sup>Optional</sup> <a name="ChannelRoleArnInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArnInput"></a>

```go
func ChannelRoleArnInput() *string
```

- *Type:* *string

---

##### `NotifyOnAddCorrespondenceToCaseInput`<sup>Optional</sup> <a name="NotifyOnAddCorrespondenceToCaseInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCaseInput"></a>

```go
func NotifyOnAddCorrespondenceToCaseInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnCaseSeverityInput`<sup>Optional</sup> <a name="NotifyOnCaseSeverityInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverityInput"></a>

```go
func NotifyOnCaseSeverityInput() *string
```

- *Type:* *string

---

##### `NotifyOnCreateOrReopenCaseInput`<sup>Optional</sup> <a name="NotifyOnCreateOrReopenCaseInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCaseInput"></a>

```go
func NotifyOnCreateOrReopenCaseInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnResolveCaseInput`<sup>Optional</sup> <a name="NotifyOnResolveCaseInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCaseInput"></a>

```go
func NotifyOnResolveCaseInput() interface{}
```

- *Type:* interface{}

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `ChannelRoleArn`<sup>Required</sup> <a name="ChannelRoleArn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArn"></a>

```go
func ChannelRoleArn() *string
```

- *Type:* *string

---

##### `NotifyOnAddCorrespondenceToCase`<sup>Required</sup> <a name="NotifyOnAddCorrespondenceToCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCase"></a>

```go
func NotifyOnAddCorrespondenceToCase() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnCaseSeverity`<sup>Required</sup> <a name="NotifyOnCaseSeverity" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverity"></a>

```go
func NotifyOnCaseSeverity() *string
```

- *Type:* *string

---

##### `NotifyOnCreateOrReopenCase`<sup>Required</sup> <a name="NotifyOnCreateOrReopenCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCase"></a>

```go
func NotifyOnCreateOrReopenCase() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnResolveCase`<sup>Required</sup> <a name="NotifyOnResolveCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCase"></a>

```go
func NotifyOnResolveCase() interface{}
```

- *Type:* interface{}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SupportappSlackChannelConfigurationConfig <a name="SupportappSlackChannelConfigurationConfig" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/supportappslackchannelconfiguration"

&supportappslackchannelconfiguration.SupportappSlackChannelConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelId: *string,
	ChannelRoleArn: *string,
	NotifyOnCaseSeverity: *string,
	TeamId: *string,
	ChannelName: *string,
	NotifyOnAddCorrespondenceToCase: interface{},
	NotifyOnCreateOrReopenCase: interface{},
	NotifyOnResolveCase: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelId">ChannelId</a></code> | <code>*string</code> | The channel ID in Slack, which identifies a channel within a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelRoleArn">ChannelRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCaseSeverity">NotifyOnCaseSeverity</a></code> | <code>*string</code> | The severity level of a support case that a customer wants to get notified for. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.teamId">TeamId</a></code> | <code>*string</code> | The team ID in Slack, which uniquely identifies a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | The channel name in Slack. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnAddCorrespondenceToCase">NotifyOnAddCorrespondenceToCase</a></code> | <code>interface{}</code> | Whether to notify when a correspondence is added to a case. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCreateOrReopenCase">NotifyOnCreateOrReopenCase</a></code> | <code>interface{}</code> | Whether to notify when a case is created or reopened. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnResolveCase">NotifyOnResolveCase</a></code> | <code>interface{}</code> | Whether to notify when a case is resolved. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelId"></a>

```go
ChannelId *string
```

- *Type:* *string

The channel ID in Slack, which identifies a channel within a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_channel_configuration#channel_id SupportappSlackChannelConfiguration#channel_id}

---

##### `ChannelRoleArn`<sup>Required</sup> <a name="ChannelRoleArn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelRoleArn"></a>

```go
ChannelRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_channel_configuration#channel_role_arn SupportappSlackChannelConfiguration#channel_role_arn}

---

##### `NotifyOnCaseSeverity`<sup>Required</sup> <a name="NotifyOnCaseSeverity" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCaseSeverity"></a>

```go
NotifyOnCaseSeverity *string
```

- *Type:* *string

The severity level of a support case that a customer wants to get notified for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_channel_configuration#notify_on_case_severity SupportappSlackChannelConfiguration#notify_on_case_severity}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

The team ID in Slack, which uniquely identifies a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_channel_configuration#team_id SupportappSlackChannelConfiguration#team_id}

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

The channel name in Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_channel_configuration#channel_name SupportappSlackChannelConfiguration#channel_name}

---

##### `NotifyOnAddCorrespondenceToCase`<sup>Optional</sup> <a name="NotifyOnAddCorrespondenceToCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnAddCorrespondenceToCase"></a>

```go
NotifyOnAddCorrespondenceToCase interface{}
```

- *Type:* interface{}

Whether to notify when a correspondence is added to a case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_channel_configuration#notify_on_add_correspondence_to_case SupportappSlackChannelConfiguration#notify_on_add_correspondence_to_case}

---

##### `NotifyOnCreateOrReopenCase`<sup>Optional</sup> <a name="NotifyOnCreateOrReopenCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCreateOrReopenCase"></a>

```go
NotifyOnCreateOrReopenCase interface{}
```

- *Type:* interface{}

Whether to notify when a case is created or reopened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_channel_configuration#notify_on_create_or_reopen_case SupportappSlackChannelConfiguration#notify_on_create_or_reopen_case}

---

##### `NotifyOnResolveCase`<sup>Optional</sup> <a name="NotifyOnResolveCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnResolveCase"></a>

```go
NotifyOnResolveCase interface{}
```

- *Type:* interface{}

Whether to notify when a case is resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_channel_configuration#notify_on_resolve_case SupportappSlackChannelConfiguration#notify_on_resolve_case}

---



