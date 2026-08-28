# `aiopsInvestigationGroup` Submodule <a name="`aiopsInvestigationGroup` Submodule" id="@cdktn/provider-awscc.aiopsInvestigationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiopsInvestigationGroup <a name="AiopsInvestigationGroup" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group awscc_aiops_investigation_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.NewAiopsInvestigationGroup(scope Construct, id *string, config AiopsInvestigationGroupConfig) AiopsInvestigationGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig">AiopsInvestigationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig">AiopsInvestigationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels">PutChatbotNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations">PutCrossAccountConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetChatbotNotificationChannels">ResetChatbotNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetCrossAccountConfigurations">ResetCrossAccountConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetInvestigationGroupPolicy">ResetInvestigationGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetIsCloudTrailEventHistoryEnabled">ResetIsCloudTrailEventHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTagKeyBoundaries">ResetTagKeyBoundaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutChatbotNotificationChannels` <a name="PutChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels"></a>

```go
func PutChatbotNotificationChannels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCrossAccountConfigurations` <a name="PutCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations"></a>

```go
func PutCrossAccountConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value AiopsInvestigationGroupEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetChatbotNotificationChannels` <a name="ResetChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetChatbotNotificationChannels"></a>

```go
func ResetChatbotNotificationChannels()
```

##### `ResetCrossAccountConfigurations` <a name="ResetCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetCrossAccountConfigurations"></a>

```go
func ResetCrossAccountConfigurations()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetInvestigationGroupPolicy` <a name="ResetInvestigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetInvestigationGroupPolicy"></a>

```go
func ResetInvestigationGroupPolicy()
```

##### `ResetIsCloudTrailEventHistoryEnabled` <a name="ResetIsCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetIsCloudTrailEventHistoryEnabled"></a>

```go
func ResetIsCloudTrailEventHistoryEnabled()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRetentionInDays"></a>

```go
func ResetRetentionInDays()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTagKeyBoundaries` <a name="ResetTagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTagKeyBoundaries"></a>

```go
func ResetTagKeyBoundaries()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.AiopsInvestigationGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.AiopsInvestigationGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.AiopsInvestigationGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.AiopsInvestigationGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiopsInvestigationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiopsInvestigationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AiopsInvestigationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannels">ChatbotNotificationChannels</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList">AiopsInvestigationGroupChatbotNotificationChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurations">CrossAccountConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList">AiopsInvestigationGroupCrossAccountConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference">AiopsInvestigationGroupEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedAt">LastModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedBy">LastModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList">AiopsInvestigationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannelsInput">ChatbotNotificationChannelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurationsInput">CrossAccountConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicyInput">InvestigationGroupPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabledInput">IsCloudTrailEventHistoryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundariesInput">TagKeyBoundariesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicy">InvestigationGroupPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled">IsCloudTrailEventHistoryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundaries">TagKeyBoundaries</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ChatbotNotificationChannels`<sup>Required</sup> <a name="ChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannels"></a>

```go
func ChatbotNotificationChannels() AiopsInvestigationGroupChatbotNotificationChannelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList">AiopsInvestigationGroupChatbotNotificationChannelsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CrossAccountConfigurations`<sup>Required</sup> <a name="CrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurations"></a>

```go
func CrossAccountConfigurations() AiopsInvestigationGroupCrossAccountConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList">AiopsInvestigationGroupCrossAccountConfigurationsList</a>

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfig"></a>

```go
func EncryptionConfig() AiopsInvestigationGroupEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference">AiopsInvestigationGroupEncryptionConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedAt"></a>

```go
func LastModifiedAt() *string
```

- *Type:* *string

---

##### `LastModifiedBy`<sup>Required</sup> <a name="LastModifiedBy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedBy"></a>

```go
func LastModifiedBy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tags"></a>

```go
func Tags() AiopsInvestigationGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList">AiopsInvestigationGroupTagsList</a>

---

##### `ChatbotNotificationChannelsInput`<sup>Optional</sup> <a name="ChatbotNotificationChannelsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannelsInput"></a>

```go
func ChatbotNotificationChannelsInput() interface{}
```

- *Type:* interface{}

---

##### `CrossAccountConfigurationsInput`<sup>Optional</sup> <a name="CrossAccountConfigurationsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurationsInput"></a>

```go
func CrossAccountConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InvestigationGroupPolicyInput`<sup>Optional</sup> <a name="InvestigationGroupPolicyInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicyInput"></a>

```go
func InvestigationGroupPolicyInput() *string
```

- *Type:* *string

---

##### `IsCloudTrailEventHistoryEnabledInput`<sup>Optional</sup> <a name="IsCloudTrailEventHistoryEnabledInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabledInput"></a>

```go
func IsCloudTrailEventHistoryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDaysInput"></a>

```go
func RetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagKeyBoundariesInput`<sup>Optional</sup> <a name="TagKeyBoundariesInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundariesInput"></a>

```go
func TagKeyBoundariesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `InvestigationGroupPolicy`<sup>Required</sup> <a name="InvestigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicy"></a>

```go
func InvestigationGroupPolicy() *string
```

- *Type:* *string

---

##### `IsCloudTrailEventHistoryEnabled`<sup>Required</sup> <a name="IsCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled"></a>

```go
func IsCloudTrailEventHistoryEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TagKeyBoundaries`<sup>Required</sup> <a name="TagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundaries"></a>

```go
func TagKeyBoundaries() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiopsInvestigationGroupChatbotNotificationChannels <a name="AiopsInvestigationGroupChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

&aiopsinvestigationgroup.AiopsInvestigationGroupChatbotNotificationChannels {
	ChatConfigurationArns: *[]*string,
	SnsTopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.chatConfigurationArns">ChatConfigurationArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}. |

---

##### `ChatConfigurationArns`<sup>Optional</sup> <a name="ChatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.chatConfigurationArns"></a>

```go
ChatConfigurationArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}.

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.snsTopicArn"></a>

```go
SnsTopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}.

---

### AiopsInvestigationGroupConfig <a name="AiopsInvestigationGroupConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

&aiopsinvestigationgroup.AiopsInvestigationGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ChatbotNotificationChannels: interface{},
	CrossAccountConfigurations: interface{},
	EncryptionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig,
	InvestigationGroupPolicy: *string,
	IsCloudTrailEventHistoryEnabled: interface{},
	RetentionInDays: *f64,
	RoleArn: *string,
	TagKeyBoundaries: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.name">Name</a></code> | <code>*string</code> | User friendly name for resources. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.chatbotNotificationChannels">ChatbotNotificationChannels</a></code> | <code>interface{}</code> | An array of key-value pairs of notification channels to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.crossAccountConfigurations">CrossAccountConfigurations</a></code> | <code>interface{}</code> | An array of cross account configurations. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.investigationGroupPolicy">InvestigationGroupPolicy</a></code> | <code>*string</code> | Investigation Group policy. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.isCloudTrailEventHistoryEnabled">IsCloudTrailEventHistoryEnabled</a></code> | <code>interface{}</code> | Flag to enable cloud trail history. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | The number of days to retain the investigation group. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Investigation Role's ARN. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tagKeyBoundaries">TagKeyBoundaries</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

User friendly name for resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#name AiopsInvestigationGroup#name}

---

##### `ChatbotNotificationChannels`<sup>Optional</sup> <a name="ChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.chatbotNotificationChannels"></a>

```go
ChatbotNotificationChannels interface{}
```

- *Type:* interface{}

An array of key-value pairs of notification channels to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#chatbot_notification_channels AiopsInvestigationGroup#chatbot_notification_channels}

---

##### `CrossAccountConfigurations`<sup>Optional</sup> <a name="CrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.crossAccountConfigurations"></a>

```go
CrossAccountConfigurations interface{}
```

- *Type:* interface{}

An array of cross account configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#cross_account_configurations AiopsInvestigationGroup#cross_account_configurations}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.encryptionConfig"></a>

```go
EncryptionConfig AiopsInvestigationGroupEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}.

---

##### `InvestigationGroupPolicy`<sup>Optional</sup> <a name="InvestigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.investigationGroupPolicy"></a>

```go
InvestigationGroupPolicy *string
```

- *Type:* *string

Investigation Group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#investigation_group_policy AiopsInvestigationGroup#investigation_group_policy}

---

##### `IsCloudTrailEventHistoryEnabled`<sup>Optional</sup> <a name="IsCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.isCloudTrailEventHistoryEnabled"></a>

```go
IsCloudTrailEventHistoryEnabled interface{}
```

- *Type:* interface{}

Flag to enable cloud trail history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#is_cloud_trail_event_history_enabled AiopsInvestigationGroup#is_cloud_trail_event_history_enabled}

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.retentionInDays"></a>

```go
RetentionInDays *f64
```

- *Type:* *f64

The number of days to retain the investigation group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#retention_in_days AiopsInvestigationGroup#retention_in_days}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#role_arn AiopsInvestigationGroup#role_arn}

---

##### `TagKeyBoundaries`<sup>Optional</sup> <a name="TagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tagKeyBoundaries"></a>

```go
TagKeyBoundaries *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#tags AiopsInvestigationGroup#tags}

---

### AiopsInvestigationGroupCrossAccountConfigurations <a name="AiopsInvestigationGroupCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

&aiopsinvestigationgroup.AiopsInvestigationGroupCrossAccountConfigurations {
	SourceRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.property.sourceRoleArn">SourceRoleArn</a></code> | <code>*string</code> | The Investigation Role's ARN. |

---

##### `SourceRoleArn`<sup>Optional</sup> <a name="SourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.property.sourceRoleArn"></a>

```go
SourceRoleArn *string
```

- *Type:* *string

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#source_role_arn AiopsInvestigationGroup#source_role_arn}

---

### AiopsInvestigationGroupEncryptionConfig <a name="AiopsInvestigationGroupEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

&aiopsinvestigationgroup.AiopsInvestigationGroupEncryptionConfig {
	EncryptionConfigurationType: *string,
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.encryptionConfigurationType">EncryptionConfigurationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}. |

---

##### `EncryptionConfigurationType`<sup>Optional</sup> <a name="EncryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.encryptionConfigurationType"></a>

```go
EncryptionConfigurationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}.

---

### AiopsInvestigationGroupTags <a name="AiopsInvestigationGroupTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

&aiopsinvestigationgroup.AiopsInvestigationGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiopsInvestigationGroupChatbotNotificationChannelsList <a name="AiopsInvestigationGroupChatbotNotificationChannelsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.NewAiopsInvestigationGroupChatbotNotificationChannelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiopsInvestigationGroupChatbotNotificationChannelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get"></a>

```go
func Get(index *f64) AiopsInvestigationGroupChatbotNotificationChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiopsInvestigationGroupChatbotNotificationChannelsOutputReference <a name="AiopsInvestigationGroupChatbotNotificationChannelsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.NewAiopsInvestigationGroupChatbotNotificationChannelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiopsInvestigationGroupChatbotNotificationChannelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetChatConfigurationArns">ResetChatConfigurationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChatConfigurationArns` <a name="ResetChatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetChatConfigurationArns"></a>

```go
func ResetChatConfigurationArns()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetSnsTopicArn"></a>

```go
func ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArnsInput">ChatConfigurationArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns">ChatConfigurationArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChatConfigurationArnsInput`<sup>Optional</sup> <a name="ChatConfigurationArnsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArnsInput"></a>

```go
func ChatConfigurationArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArnInput"></a>

```go
func SnsTopicArnInput() *string
```

- *Type:* *string

---

##### `ChatConfigurationArns`<sup>Required</sup> <a name="ChatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns"></a>

```go
func ChatConfigurationArns() *[]*string
```

- *Type:* *[]*string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiopsInvestigationGroupCrossAccountConfigurationsList <a name="AiopsInvestigationGroupCrossAccountConfigurationsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.NewAiopsInvestigationGroupCrossAccountConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiopsInvestigationGroupCrossAccountConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get"></a>

```go
func Get(index *f64) AiopsInvestigationGroupCrossAccountConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiopsInvestigationGroupCrossAccountConfigurationsOutputReference <a name="AiopsInvestigationGroupCrossAccountConfigurationsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.NewAiopsInvestigationGroupCrossAccountConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiopsInvestigationGroupCrossAccountConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resetSourceRoleArn">ResetSourceRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceRoleArn` <a name="ResetSourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resetSourceRoleArn"></a>

```go
func ResetSourceRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArnInput">SourceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn">SourceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceRoleArnInput`<sup>Optional</sup> <a name="SourceRoleArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArnInput"></a>

```go
func SourceRoleArnInput() *string
```

- *Type:* *string

---

##### `SourceRoleArn`<sup>Required</sup> <a name="SourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn"></a>

```go
func SourceRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiopsInvestigationGroupEncryptionConfigOutputReference <a name="AiopsInvestigationGroupEncryptionConfigOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.NewAiopsInvestigationGroupEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiopsInvestigationGroupEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetEncryptionConfigurationType">ResetEncryptionConfigurationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionConfigurationType` <a name="ResetEncryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetEncryptionConfigurationType"></a>

```go
func ResetEncryptionConfigurationType()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationTypeInput">EncryptionConfigurationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType">EncryptionConfigurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConfigurationTypeInput`<sup>Optional</sup> <a name="EncryptionConfigurationTypeInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationTypeInput"></a>

```go
func EncryptionConfigurationTypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigurationType`<sup>Required</sup> <a name="EncryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType"></a>

```go
func EncryptionConfigurationType() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiopsInvestigationGroupTagsList <a name="AiopsInvestigationGroupTagsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.NewAiopsInvestigationGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiopsInvestigationGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get"></a>

```go
func Get(index *f64) AiopsInvestigationGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiopsInvestigationGroupTagsOutputReference <a name="AiopsInvestigationGroupTagsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/aiopsinvestigationgroup"

aiopsinvestigationgroup.NewAiopsInvestigationGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiopsInvestigationGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



