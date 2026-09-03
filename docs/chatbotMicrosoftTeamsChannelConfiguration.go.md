# `chatbotMicrosoftTeamsChannelConfiguration` Submodule <a name="`chatbotMicrosoftTeamsChannelConfiguration` Submodule" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotMicrosoftTeamsChannelConfiguration <a name="ChatbotMicrosoftTeamsChannelConfiguration" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration awscc_chatbot_microsoft_teams_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chatbotmicrosoftteamschannelconfiguration"

chatbotmicrosoftteamschannelconfiguration.NewChatbotMicrosoftTeamsChannelConfiguration(scope Construct, id *string, config ChatbotMicrosoftTeamsChannelConfigurationConfig) ChatbotMicrosoftTeamsChannelConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig">ChatbotMicrosoftTeamsChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig">ChatbotMicrosoftTeamsChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetCustomizationResourceArns">ResetCustomizationResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetGuardrailPolicies">ResetGuardrailPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetSnsTopicArns">ResetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTeamsChannelName">ResetTeamsChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetUserRoleRequired">ResetUserRoleRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomizationResourceArns` <a name="ResetCustomizationResourceArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetCustomizationResourceArns"></a>

```go
func ResetCustomizationResourceArns()
```

##### `ResetGuardrailPolicies` <a name="ResetGuardrailPolicies" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetGuardrailPolicies"></a>

```go
func ResetGuardrailPolicies()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetLoggingLevel"></a>

```go
func ResetLoggingLevel()
```

##### `ResetSnsTopicArns` <a name="ResetSnsTopicArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetSnsTopicArns"></a>

```go
func ResetSnsTopicArns()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTeamsChannelName` <a name="ResetTeamsChannelName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTeamsChannelName"></a>

```go
func ResetTeamsChannelName()
```

##### `ResetUserRoleRequired` <a name="ResetUserRoleRequired" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetUserRoleRequired"></a>

```go
func ResetUserRoleRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChatbotMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chatbotmicrosoftteamschannelconfiguration"

chatbotmicrosoftteamschannelconfiguration.ChatbotMicrosoftTeamsChannelConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chatbotmicrosoftteamschannelconfiguration"

chatbotmicrosoftteamschannelconfiguration.ChatbotMicrosoftTeamsChannelConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chatbotmicrosoftteamschannelconfiguration"

chatbotmicrosoftteamschannelconfiguration.ChatbotMicrosoftTeamsChannelConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chatbotmicrosoftteamschannelconfiguration"

chatbotmicrosoftteamschannelconfiguration.ChatbotMicrosoftTeamsChannelConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChatbotMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChatbotMicrosoftTeamsChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChatbotMicrosoftTeamsChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChatbotMicrosoftTeamsChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList">ChatbotMicrosoftTeamsChannelConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationNameInput">ConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArnsInput">CustomizationResourceArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPoliciesInput">GuardrailPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArnsInput">SnsTopicArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelIdInput">TeamsChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelNameInput">TeamsChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantIdInput">TeamsTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequiredInput">UserRoleRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationName">ConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArns">CustomizationResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPolicies">GuardrailPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArns">SnsTopicArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelId">TeamsChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelName">TeamsChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantId">TeamsTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequired">UserRoleRequired</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tags"></a>

```go
func Tags() ChatbotMicrosoftTeamsChannelConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList">ChatbotMicrosoftTeamsChannelConfigurationTagsList</a>

---

##### `ConfigurationNameInput`<sup>Optional</sup> <a name="ConfigurationNameInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationNameInput"></a>

```go
func ConfigurationNameInput() *string
```

- *Type:* *string

---

##### `CustomizationResourceArnsInput`<sup>Optional</sup> <a name="CustomizationResourceArnsInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArnsInput"></a>

```go
func CustomizationResourceArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GuardrailPoliciesInput`<sup>Optional</sup> <a name="GuardrailPoliciesInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPoliciesInput"></a>

```go
func GuardrailPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevelInput"></a>

```go
func LoggingLevelInput() *string
```

- *Type:* *string

---

##### `SnsTopicArnsInput`<sup>Optional</sup> <a name="SnsTopicArnsInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArnsInput"></a>

```go
func SnsTopicArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `TeamsChannelIdInput`<sup>Optional</sup> <a name="TeamsChannelIdInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelIdInput"></a>

```go
func TeamsChannelIdInput() *string
```

- *Type:* *string

---

##### `TeamsChannelNameInput`<sup>Optional</sup> <a name="TeamsChannelNameInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelNameInput"></a>

```go
func TeamsChannelNameInput() *string
```

- *Type:* *string

---

##### `TeamsTenantIdInput`<sup>Optional</sup> <a name="TeamsTenantIdInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantIdInput"></a>

```go
func TeamsTenantIdInput() *string
```

- *Type:* *string

---

##### `UserRoleRequiredInput`<sup>Optional</sup> <a name="UserRoleRequiredInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequiredInput"></a>

```go
func UserRoleRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationName"></a>

```go
func ConfigurationName() *string
```

- *Type:* *string

---

##### `CustomizationResourceArns`<sup>Required</sup> <a name="CustomizationResourceArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArns"></a>

```go
func CustomizationResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `GuardrailPolicies`<sup>Required</sup> <a name="GuardrailPolicies" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPolicies"></a>

```go
func GuardrailPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevel"></a>

```go
func LoggingLevel() *string
```

- *Type:* *string

---

##### `SnsTopicArns`<sup>Required</sup> <a name="SnsTopicArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArns"></a>

```go
func SnsTopicArns() *[]*string
```

- *Type:* *[]*string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `TeamsChannelId`<sup>Required</sup> <a name="TeamsChannelId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelId"></a>

```go
func TeamsChannelId() *string
```

- *Type:* *string

---

##### `TeamsChannelName`<sup>Required</sup> <a name="TeamsChannelName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelName"></a>

```go
func TeamsChannelName() *string
```

- *Type:* *string

---

##### `TeamsTenantId`<sup>Required</sup> <a name="TeamsTenantId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantId"></a>

```go
func TeamsTenantId() *string
```

- *Type:* *string

---

##### `UserRoleRequired`<sup>Required</sup> <a name="UserRoleRequired" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequired"></a>

```go
func UserRoleRequired() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotMicrosoftTeamsChannelConfigurationConfig <a name="ChatbotMicrosoftTeamsChannelConfigurationConfig" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chatbotmicrosoftteamschannelconfiguration"

&chatbotmicrosoftteamschannelconfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigurationName: *string,
	IamRoleArn: *string,
	TeamId: *string,
	TeamsChannelId: *string,
	TeamsTenantId: *string,
	CustomizationResourceArns: *[]*string,
	GuardrailPolicies: *[]*string,
	LoggingLevel: *string,
	SnsTopicArns: *[]*string,
	Tags: interface{},
	TeamsChannelName: *string,
	UserRoleRequired: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.configurationName">ConfigurationName</a></code> | <code>*string</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that defines the permissions for AWS Chatbot. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamId">TeamId</a></code> | <code>*string</code> | The id of the Microsoft Teams team. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelId">TeamsChannelId</a></code> | <code>*string</code> | The id of the Microsoft Teams channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsTenantId">TeamsTenantId</a></code> | <code>*string</code> | The id of the Microsoft Teams tenant. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.customizationResourceArns">CustomizationResourceArns</a></code> | <code>*[]*string</code> | ARNs of Custom Actions to associate with notifications in the provided chat channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.guardrailPolicies">GuardrailPolicies</a></code> | <code>*[]*string</code> | The list of IAM policy ARNs that are applied as channel guardrails. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | Specifies the logging level for this configuration:ERROR,INFO or NONE. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.snsTopicArns">SnsTopicArns</a></code> | <code>*[]*string</code> | ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to add to the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelName">TeamsChannelName</a></code> | <code>*string</code> | The name of the Microsoft Teams channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.userRoleRequired">UserRoleRequired</a></code> | <code>interface{}</code> | Enables use of a user role requirement in your chat configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.configurationName"></a>

```go
ConfigurationName *string
```

- *Type:* *string

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#configuration_name ChatbotMicrosoftTeamsChannelConfiguration#configuration_name}

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

The ARN of the IAM role that defines the permissions for AWS Chatbot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#iam_role_arn ChatbotMicrosoftTeamsChannelConfiguration#iam_role_arn}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

The id of the Microsoft Teams team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#team_id ChatbotMicrosoftTeamsChannelConfiguration#team_id}

---

##### `TeamsChannelId`<sup>Required</sup> <a name="TeamsChannelId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelId"></a>

```go
TeamsChannelId *string
```

- *Type:* *string

The id of the Microsoft Teams channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_channel_id ChatbotMicrosoftTeamsChannelConfiguration#teams_channel_id}

---

##### `TeamsTenantId`<sup>Required</sup> <a name="TeamsTenantId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsTenantId"></a>

```go
TeamsTenantId *string
```

- *Type:* *string

The id of the Microsoft Teams tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_tenant_id ChatbotMicrosoftTeamsChannelConfiguration#teams_tenant_id}

---

##### `CustomizationResourceArns`<sup>Optional</sup> <a name="CustomizationResourceArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.customizationResourceArns"></a>

```go
CustomizationResourceArns *[]*string
```

- *Type:* *[]*string

ARNs of Custom Actions to associate with notifications in the provided chat channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#customization_resource_arns ChatbotMicrosoftTeamsChannelConfiguration#customization_resource_arns}

---

##### `GuardrailPolicies`<sup>Optional</sup> <a name="GuardrailPolicies" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.guardrailPolicies"></a>

```go
GuardrailPolicies *[]*string
```

- *Type:* *[]*string

The list of IAM policy ARNs that are applied as channel guardrails.

The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#guardrail_policies ChatbotMicrosoftTeamsChannelConfiguration#guardrail_policies}

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.loggingLevel"></a>

```go
LoggingLevel *string
```

- *Type:* *string

Specifies the logging level for this configuration:ERROR,INFO or NONE.

This property affects the log entries pushed to Amazon CloudWatch logs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#logging_level ChatbotMicrosoftTeamsChannelConfiguration#logging_level}

---

##### `SnsTopicArns`<sup>Optional</sup> <a name="SnsTopicArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.snsTopicArns"></a>

```go
SnsTopicArns *[]*string
```

- *Type:* *[]*string

ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#sns_topic_arns ChatbotMicrosoftTeamsChannelConfiguration#sns_topic_arns}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to add to the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#tags ChatbotMicrosoftTeamsChannelConfiguration#tags}

---

##### `TeamsChannelName`<sup>Optional</sup> <a name="TeamsChannelName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelName"></a>

```go
TeamsChannelName *string
```

- *Type:* *string

The name of the Microsoft Teams channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_channel_name ChatbotMicrosoftTeamsChannelConfiguration#teams_channel_name}

---

##### `UserRoleRequired`<sup>Optional</sup> <a name="UserRoleRequired" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.userRoleRequired"></a>

```go
UserRoleRequired interface{}
```

- *Type:* interface{}

Enables use of a user role requirement in your chat configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#user_role_required ChatbotMicrosoftTeamsChannelConfiguration#user_role_required}

---

### ChatbotMicrosoftTeamsChannelConfigurationTags <a name="ChatbotMicrosoftTeamsChannelConfigurationTags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chatbotmicrosoftteamschannelconfiguration"

&chatbotmicrosoftteamschannelconfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#key ChatbotMicrosoftTeamsChannelConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#value ChatbotMicrosoftTeamsChannelConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#key ChatbotMicrosoftTeamsChannelConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chatbot_microsoft_teams_channel_configuration#value ChatbotMicrosoftTeamsChannelConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotMicrosoftTeamsChannelConfigurationTagsList <a name="ChatbotMicrosoftTeamsChannelConfigurationTagsList" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chatbotmicrosoftteamschannelconfiguration"

chatbotmicrosoftteamschannelconfiguration.NewChatbotMicrosoftTeamsChannelConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChatbotMicrosoftTeamsChannelConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.get"></a>

```go
func Get(index *f64) ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference <a name="ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chatbotmicrosoftteamschannelconfiguration"

chatbotmicrosoftteamschannelconfiguration.NewChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



