# `cognitoUserPoolRegionalConfigurationAttachment` Submodule <a name="`cognitoUserPoolRegionalConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolRegionalConfigurationAttachment <a name="CognitoUserPoolRegionalConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.NewCognitoUserPoolRegionalConfigurationAttachment(scope Construct, id *string, config CognitoUserPoolRegionalConfigurationAttachmentConfig) CognitoUserPoolRegionalConfigurationAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig">CognitoUserPoolRegionalConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig">CognitoUserPoolRegionalConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration">PutEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig">PutLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration">PutSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetEmailConfiguration">ResetEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetLambdaConfig">ResetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetSmsConfiguration">ResetSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetUserPoolTags">ResetUserPoolTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmailConfiguration` <a name="PutEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration"></a>

```go
func PutEmailConfiguration(value CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---

##### `PutLambdaConfig` <a name="PutLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig"></a>

```go
func PutLambdaConfig(value CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---

##### `PutSmsConfiguration` <a name="PutSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration"></a>

```go
func PutSmsConfiguration(value CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---

##### `ResetEmailConfiguration` <a name="ResetEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetEmailConfiguration"></a>

```go
func ResetEmailConfiguration()
```

##### `ResetLambdaConfig` <a name="ResetLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetLambdaConfig"></a>

```go
func ResetLambdaConfig()
```

##### `ResetSmsConfiguration` <a name="ResetSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetSmsConfiguration"></a>

```go
func ResetSmsConfiguration()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUserPoolTags` <a name="ResetUserPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetUserPoolTags"></a>

```go
func ResetUserPoolTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CognitoUserPoolRegionalConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CognitoUserPoolRegionalConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolRegionalConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration">EmailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration">SmsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfigurationInput">EmailConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfigInput">LambdaConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfigurationInput">SmsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTagsInput">UserPoolTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags">UserPoolTags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailConfiguration`<sup>Required</sup> <a name="EmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration"></a>

```go
func EmailConfiguration() CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig"></a>

```go
func LambdaConfig() CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a>

---

##### `SmsConfiguration`<sup>Required</sup> <a name="SmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration"></a>

```go
func SmsConfiguration() CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a>

---

##### `EmailConfigurationInput`<sup>Optional</sup> <a name="EmailConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfigurationInput"></a>

```go
func EmailConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaConfigInput`<sup>Optional</sup> <a name="LambdaConfigInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfigInput"></a>

```go
func LambdaConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SmsConfigurationInput`<sup>Optional</sup> <a name="SmsConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfigurationInput"></a>

```go
func SmsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `UserPoolTagsInput`<sup>Optional</sup> <a name="UserPoolTagsInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTagsInput"></a>

```go
func UserPoolTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `UserPoolTags`<sup>Required</sup> <a name="UserPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags"></a>

```go
func UserPoolTags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolRegionalConfigurationAttachmentConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

&cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	UserPoolId: *string,
	EmailConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration,
	LambdaConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig,
	SmsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration,
	Status: *string,
	UserPoolTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.emailConfiguration">EmailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.smsConfiguration">SmsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.status">Status</a></code> | <code>*string</code> | The status of the replica. Set to ACTIVE or INACTIVE. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolTags">UserPoolTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}.

---

##### `EmailConfiguration`<sup>Optional</sup> <a name="EmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.emailConfiguration"></a>

```go
EmailConfiguration CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}.

---

##### `LambdaConfig`<sup>Optional</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lambdaConfig"></a>

```go
LambdaConfig CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}.

---

##### `SmsConfiguration`<sup>Optional</sup> <a name="SmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.smsConfiguration"></a>

```go
SmsConfiguration CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The status of the replica. Set to ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#status CognitoUserPoolRegionalConfigurationAttachment#status}

---

##### `UserPoolTags`<sup>Optional</sup> <a name="UserPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolTags"></a>

```go
UserPoolTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}.

---

### CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration <a name="CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

&cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration {
	ConfigurationSet: *string,
	EmailSendingAccount: *string,
	From: *string,
	ReplyToEmailAddress: *string,
	SourceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.configurationSet">ConfigurationSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.emailSendingAccount">EmailSendingAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.replyToEmailAddress">ReplyToEmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.sourceArn">SourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}. |

---

##### `ConfigurationSet`<sup>Optional</sup> <a name="ConfigurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.configurationSet"></a>

```go
ConfigurationSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}.

---

##### `EmailSendingAccount`<sup>Optional</sup> <a name="EmailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.emailSendingAccount"></a>

```go
EmailSendingAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}.

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}.

---

##### `ReplyToEmailAddress`<sup>Optional</sup> <a name="ReplyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.replyToEmailAddress"></a>

```go
ReplyToEmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}.

---

##### `SourceArn`<sup>Optional</sup> <a name="SourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.sourceArn"></a>

```go
SourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

&cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig {
	CreateAuthChallenge: *string,
	CustomEmailSender: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender,
	CustomMessage: *string,
	CustomSmsSender: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender,
	DefineAuthChallenge: *string,
	InboundFederation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation,
	KmsKeyId: *string,
	PostAuthentication: *string,
	PostConfirmation: *string,
	PreAuthentication: *string,
	PreSignUp: *string,
	PreTokenGeneration: *string,
	PreTokenGenerationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig,
	UserMigration: *string,
	VerifyAuthChallengeResponse: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.createAuthChallenge">CreateAuthChallenge</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customEmailSender">CustomEmailSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customMessage">CustomMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customSmsSender">CustomSmsSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.defineAuthChallenge">DefineAuthChallenge</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.inboundFederation">InboundFederation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postAuthentication">PostAuthentication</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postConfirmation">PostConfirmation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preAuthentication">PreAuthentication</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preSignUp">PreSignUp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGeneration">PreTokenGeneration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGenerationConfig">PreTokenGenerationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.userMigration">UserMigration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.verifyAuthChallengeResponse">VerifyAuthChallengeResponse</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}. |

---

##### `CreateAuthChallenge`<sup>Optional</sup> <a name="CreateAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.createAuthChallenge"></a>

```go
CreateAuthChallenge *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}.

---

##### `CustomEmailSender`<sup>Optional</sup> <a name="CustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customEmailSender"></a>

```go
CustomEmailSender CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}.

---

##### `CustomMessage`<sup>Optional</sup> <a name="CustomMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customMessage"></a>

```go
CustomMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}.

---

##### `CustomSmsSender`<sup>Optional</sup> <a name="CustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customSmsSender"></a>

```go
CustomSmsSender CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}.

---

##### `DefineAuthChallenge`<sup>Optional</sup> <a name="DefineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.defineAuthChallenge"></a>

```go
DefineAuthChallenge *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}.

---

##### `InboundFederation`<sup>Optional</sup> <a name="InboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.inboundFederation"></a>

```go
InboundFederation CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}.

---

##### `PostAuthentication`<sup>Optional</sup> <a name="PostAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postAuthentication"></a>

```go
PostAuthentication *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}.

---

##### `PostConfirmation`<sup>Optional</sup> <a name="PostConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postConfirmation"></a>

```go
PostConfirmation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}.

---

##### `PreAuthentication`<sup>Optional</sup> <a name="PreAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preAuthentication"></a>

```go
PreAuthentication *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}.

---

##### `PreSignUp`<sup>Optional</sup> <a name="PreSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preSignUp"></a>

```go
PreSignUp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}.

---

##### `PreTokenGeneration`<sup>Optional</sup> <a name="PreTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGeneration"></a>

```go
PreTokenGeneration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}.

---

##### `PreTokenGenerationConfig`<sup>Optional</sup> <a name="PreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGenerationConfig"></a>

```go
PreTokenGenerationConfig CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}.

---

##### `UserMigration`<sup>Optional</sup> <a name="UserMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.userMigration"></a>

```go
UserMigration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}.

---

##### `VerifyAuthChallengeResponse`<sup>Optional</sup> <a name="VerifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.verifyAuthChallengeResponse"></a>

```go
VerifyAuthChallengeResponse *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

&cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender {
	LambdaArn: *string,
	LambdaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `LambdaVersion`<sup>Optional</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaVersion"></a>

```go
LambdaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

&cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender {
	LambdaArn: *string,
	LambdaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `LambdaVersion`<sup>Optional</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaVersion"></a>

```go
LambdaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

&cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation {
	LambdaArn: *string,
	LambdaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `LambdaVersion`<sup>Optional</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaVersion"></a>

```go
LambdaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

&cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig {
	LambdaArn: *string,
	LambdaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `LambdaVersion`<sup>Optional</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaVersion"></a>

```go
LambdaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

&cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration {
	EumsSms: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms,
	ExternalId: *string,
	SnsCallerArn: *string,
	SnsRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.eumsSms">EumsSms</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsCallerArn">SnsCallerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsRegion">SnsRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}. |

---

##### `EumsSms`<sup>Optional</sup> <a name="EumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.eumsSms"></a>

```go
EumsSms CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

##### `SnsCallerArn`<sup>Optional</sup> <a name="SnsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsCallerArn"></a>

```go
SnsCallerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}.

---

##### `SnsRegion`<sup>Optional</sup> <a name="SnsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsRegion"></a>

```go
SnsRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}.

---

### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

&cognitouserpoolregionalconfigurationattachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms {
	CallerArn: *string,
	ConfigurationSetName: *string,
	ExternalId: *string,
	InEntityId: *string,
	InTemplateId: *string,
	OriginationIdentity: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.callerArn">CallerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inEntityId">InEntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inTemplateId">InTemplateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.originationIdentity">OriginationIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}. |

---

##### `CallerArn`<sup>Optional</sup> <a name="CallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.callerArn"></a>

```go
CallerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}.

---

##### `ConfigurationSetName`<sup>Optional</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.configurationSetName"></a>

```go
ConfigurationSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

##### `InEntityId`<sup>Optional</sup> <a name="InEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inEntityId"></a>

```go
InEntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}.

---

##### `InTemplateId`<sup>Optional</sup> <a name="InTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inTemplateId"></a>

```go
InTemplateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}.

---

##### `OriginationIdentity`<sup>Optional</sup> <a name="OriginationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.originationIdentity"></a>

```go
OriginationIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.NewCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetConfigurationSet">ResetConfigurationSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetEmailSendingAccount">ResetEmailSendingAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetReplyToEmailAddress">ResetReplyToEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetSourceArn">ResetSourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationSet` <a name="ResetConfigurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetConfigurationSet"></a>

```go
func ResetConfigurationSet()
```

##### `ResetEmailSendingAccount` <a name="ResetEmailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetEmailSendingAccount"></a>

```go
func ResetEmailSendingAccount()
```

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetReplyToEmailAddress` <a name="ResetReplyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetReplyToEmailAddress"></a>

```go
func ResetReplyToEmailAddress()
```

##### `ResetSourceArn` <a name="ResetSourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetSourceArn"></a>

```go
func ResetSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSetInput">ConfigurationSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccountInput">EmailSendingAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddressInput">ReplyToEmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArnInput">SourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet">ConfigurationSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount">EmailSendingAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress">ReplyToEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationSetInput`<sup>Optional</sup> <a name="ConfigurationSetInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSetInput"></a>

```go
func ConfigurationSetInput() *string
```

- *Type:* *string

---

##### `EmailSendingAccountInput`<sup>Optional</sup> <a name="EmailSendingAccountInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccountInput"></a>

```go
func EmailSendingAccountInput() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `ReplyToEmailAddressInput`<sup>Optional</sup> <a name="ReplyToEmailAddressInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddressInput"></a>

```go
func ReplyToEmailAddressInput() *string
```

- *Type:* *string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArnInput"></a>

```go
func SourceArnInput() *string
```

- *Type:* *string

---

##### `ConfigurationSet`<sup>Required</sup> <a name="ConfigurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet"></a>

```go
func ConfigurationSet() *string
```

- *Type:* *string

---

##### `EmailSendingAccount`<sup>Required</sup> <a name="EmailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```go
func EmailSendingAccount() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `ReplyToEmailAddress`<sup>Required</sup> <a name="ReplyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```go
func ReplyToEmailAddress() *string
```

- *Type:* *string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.NewCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaVersion">ResetLambdaVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaArn"></a>

```go
func ResetLambdaArn()
```

##### `ResetLambdaVersion` <a name="ResetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaVersion"></a>

```go
func ResetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput"></a>

```go
func LambdaVersionInput() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.NewCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaVersion">ResetLambdaVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaArn"></a>

```go
func ResetLambdaArn()
```

##### `ResetLambdaVersion` <a name="ResetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaVersion"></a>

```go
func ResetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput"></a>

```go
func LambdaVersionInput() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.NewCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaVersion">ResetLambdaVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaArn"></a>

```go
func ResetLambdaArn()
```

##### `ResetLambdaVersion` <a name="ResetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaVersion"></a>

```go
func ResetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersionInput"></a>

```go
func LambdaVersionInput() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.NewCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender">PutCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender">PutCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation">PutInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig">PutPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCreateAuthChallenge">ResetCreateAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomEmailSender">ResetCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomMessage">ResetCustomMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomSmsSender">ResetCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetDefineAuthChallenge">ResetDefineAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetInboundFederation">ResetInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostAuthentication">ResetPostAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostConfirmation">ResetPostConfirmation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreAuthentication">ResetPreAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreSignUp">ResetPreSignUp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGeneration">ResetPreTokenGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGenerationConfig">ResetPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetUserMigration">ResetUserMigration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetVerifyAuthChallengeResponse">ResetVerifyAuthChallengeResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomEmailSender` <a name="PutCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender"></a>

```go
func PutCustomEmailSender(value CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---

##### `PutCustomSmsSender` <a name="PutCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender"></a>

```go
func PutCustomSmsSender(value CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---

##### `PutInboundFederation` <a name="PutInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation"></a>

```go
func PutInboundFederation(value CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---

##### `PutPreTokenGenerationConfig` <a name="PutPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig"></a>

```go
func PutPreTokenGenerationConfig(value CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---

##### `ResetCreateAuthChallenge` <a name="ResetCreateAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCreateAuthChallenge"></a>

```go
func ResetCreateAuthChallenge()
```

##### `ResetCustomEmailSender` <a name="ResetCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomEmailSender"></a>

```go
func ResetCustomEmailSender()
```

##### `ResetCustomMessage` <a name="ResetCustomMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomMessage"></a>

```go
func ResetCustomMessage()
```

##### `ResetCustomSmsSender` <a name="ResetCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomSmsSender"></a>

```go
func ResetCustomSmsSender()
```

##### `ResetDefineAuthChallenge` <a name="ResetDefineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetDefineAuthChallenge"></a>

```go
func ResetDefineAuthChallenge()
```

##### `ResetInboundFederation` <a name="ResetInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetInboundFederation"></a>

```go
func ResetInboundFederation()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetPostAuthentication` <a name="ResetPostAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostAuthentication"></a>

```go
func ResetPostAuthentication()
```

##### `ResetPostConfirmation` <a name="ResetPostConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostConfirmation"></a>

```go
func ResetPostConfirmation()
```

##### `ResetPreAuthentication` <a name="ResetPreAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreAuthentication"></a>

```go
func ResetPreAuthentication()
```

##### `ResetPreSignUp` <a name="ResetPreSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreSignUp"></a>

```go
func ResetPreSignUp()
```

##### `ResetPreTokenGeneration` <a name="ResetPreTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGeneration"></a>

```go
func ResetPreTokenGeneration()
```

##### `ResetPreTokenGenerationConfig` <a name="ResetPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGenerationConfig"></a>

```go
func ResetPreTokenGenerationConfig()
```

##### `ResetUserMigration` <a name="ResetUserMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetUserMigration"></a>

```go
func ResetUserMigration()
```

##### `ResetVerifyAuthChallengeResponse` <a name="ResetVerifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetVerifyAuthChallengeResponse"></a>

```go
func ResetVerifyAuthChallengeResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender">CustomEmailSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender">CustomSmsSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation">InboundFederation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig">PreTokenGenerationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallengeInput">CreateAuthChallengeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSenderInput">CustomEmailSenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessageInput">CustomMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSenderInput">CustomSmsSenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallengeInput">DefineAuthChallengeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederationInput">InboundFederationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthenticationInput">PostAuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmationInput">PostConfirmationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthenticationInput">PreAuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUpInput">PreSignUpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfigInput">PreTokenGenerationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationInput">PreTokenGenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigrationInput">UserMigrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput">VerifyAuthChallengeResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge">CreateAuthChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage">CustomMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge">DefineAuthChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication">PostAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation">PostConfirmation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication">PreAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp">PreSignUp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration">PreTokenGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration">UserMigration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse">VerifyAuthChallengeResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomEmailSender`<sup>Required</sup> <a name="CustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender"></a>

```go
func CustomEmailSender() CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `CustomSmsSender`<sup>Required</sup> <a name="CustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender"></a>

```go
func CustomSmsSender() CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `InboundFederation`<sup>Required</sup> <a name="InboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation"></a>

```go
func InboundFederation() CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a>

---

##### `PreTokenGenerationConfig`<sup>Required</sup> <a name="PreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig"></a>

```go
func PreTokenGenerationConfig() CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a>

---

##### `CreateAuthChallengeInput`<sup>Optional</sup> <a name="CreateAuthChallengeInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallengeInput"></a>

```go
func CreateAuthChallengeInput() *string
```

- *Type:* *string

---

##### `CustomEmailSenderInput`<sup>Optional</sup> <a name="CustomEmailSenderInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSenderInput"></a>

```go
func CustomEmailSenderInput() interface{}
```

- *Type:* interface{}

---

##### `CustomMessageInput`<sup>Optional</sup> <a name="CustomMessageInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessageInput"></a>

```go
func CustomMessageInput() *string
```

- *Type:* *string

---

##### `CustomSmsSenderInput`<sup>Optional</sup> <a name="CustomSmsSenderInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSenderInput"></a>

```go
func CustomSmsSenderInput() interface{}
```

- *Type:* interface{}

---

##### `DefineAuthChallengeInput`<sup>Optional</sup> <a name="DefineAuthChallengeInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallengeInput"></a>

```go
func DefineAuthChallengeInput() *string
```

- *Type:* *string

---

##### `InboundFederationInput`<sup>Optional</sup> <a name="InboundFederationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederationInput"></a>

```go
func InboundFederationInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PostAuthenticationInput`<sup>Optional</sup> <a name="PostAuthenticationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthenticationInput"></a>

```go
func PostAuthenticationInput() *string
```

- *Type:* *string

---

##### `PostConfirmationInput`<sup>Optional</sup> <a name="PostConfirmationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmationInput"></a>

```go
func PostConfirmationInput() *string
```

- *Type:* *string

---

##### `PreAuthenticationInput`<sup>Optional</sup> <a name="PreAuthenticationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthenticationInput"></a>

```go
func PreAuthenticationInput() *string
```

- *Type:* *string

---

##### `PreSignUpInput`<sup>Optional</sup> <a name="PreSignUpInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUpInput"></a>

```go
func PreSignUpInput() *string
```

- *Type:* *string

---

##### `PreTokenGenerationConfigInput`<sup>Optional</sup> <a name="PreTokenGenerationConfigInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfigInput"></a>

```go
func PreTokenGenerationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PreTokenGenerationInput`<sup>Optional</sup> <a name="PreTokenGenerationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationInput"></a>

```go
func PreTokenGenerationInput() *string
```

- *Type:* *string

---

##### `UserMigrationInput`<sup>Optional</sup> <a name="UserMigrationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigrationInput"></a>

```go
func UserMigrationInput() *string
```

- *Type:* *string

---

##### `VerifyAuthChallengeResponseInput`<sup>Optional</sup> <a name="VerifyAuthChallengeResponseInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput"></a>

```go
func VerifyAuthChallengeResponseInput() *string
```

- *Type:* *string

---

##### `CreateAuthChallenge`<sup>Required</sup> <a name="CreateAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge"></a>

```go
func CreateAuthChallenge() *string
```

- *Type:* *string

---

##### `CustomMessage`<sup>Required</sup> <a name="CustomMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage"></a>

```go
func CustomMessage() *string
```

- *Type:* *string

---

##### `DefineAuthChallenge`<sup>Required</sup> <a name="DefineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```go
func DefineAuthChallenge() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PostAuthentication`<sup>Required</sup> <a name="PostAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication"></a>

```go
func PostAuthentication() *string
```

- *Type:* *string

---

##### `PostConfirmation`<sup>Required</sup> <a name="PostConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation"></a>

```go
func PostConfirmation() *string
```

- *Type:* *string

---

##### `PreAuthentication`<sup>Required</sup> <a name="PreAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication"></a>

```go
func PreAuthentication() *string
```

- *Type:* *string

---

##### `PreSignUp`<sup>Required</sup> <a name="PreSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp"></a>

```go
func PreSignUp() *string
```

- *Type:* *string

---

##### `PreTokenGeneration`<sup>Required</sup> <a name="PreTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration"></a>

```go
func PreTokenGeneration() *string
```

- *Type:* *string

---

##### `UserMigration`<sup>Required</sup> <a name="UserMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration"></a>

```go
func UserMigration() *string
```

- *Type:* *string

---

##### `VerifyAuthChallengeResponse`<sup>Required</sup> <a name="VerifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```go
func VerifyAuthChallengeResponse() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.NewCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaVersion">ResetLambdaVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaArn"></a>

```go
func ResetLambdaArn()
```

##### `ResetLambdaVersion` <a name="ResetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaVersion"></a>

```go
func ResetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersionInput"></a>

```go
func LambdaVersionInput() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.NewCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetCallerArn">ResetCallerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetConfigurationSetName">ResetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInEntityId">ResetInEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInTemplateId">ResetInTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetOriginationIdentity">ResetOriginationIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCallerArn` <a name="ResetCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetCallerArn"></a>

```go
func ResetCallerArn()
```

##### `ResetConfigurationSetName` <a name="ResetConfigurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetConfigurationSetName"></a>

```go
func ResetConfigurationSetName()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetInEntityId` <a name="ResetInEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInEntityId"></a>

```go
func ResetInEntityId()
```

##### `ResetInTemplateId` <a name="ResetInTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInTemplateId"></a>

```go
func ResetInTemplateId()
```

##### `ResetOriginationIdentity` <a name="ResetOriginationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetOriginationIdentity"></a>

```go
func ResetOriginationIdentity()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArnInput">CallerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityIdInput">InEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateIdInput">InTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentityInput">OriginationIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn">CallerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId">InEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId">InTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity">OriginationIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CallerArnInput`<sup>Optional</sup> <a name="CallerArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArnInput"></a>

```go
func CallerArnInput() *string
```

- *Type:* *string

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetNameInput"></a>

```go
func ConfigurationSetNameInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `InEntityIdInput`<sup>Optional</sup> <a name="InEntityIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityIdInput"></a>

```go
func InEntityIdInput() *string
```

- *Type:* *string

---

##### `InTemplateIdInput`<sup>Optional</sup> <a name="InTemplateIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateIdInput"></a>

```go
func InTemplateIdInput() *string
```

- *Type:* *string

---

##### `OriginationIdentityInput`<sup>Optional</sup> <a name="OriginationIdentityInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentityInput"></a>

```go
func OriginationIdentityInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CallerArn`<sup>Required</sup> <a name="CallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn"></a>

```go
func CallerArn() *string
```

- *Type:* *string

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName"></a>

```go
func ConfigurationSetName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `InEntityId`<sup>Required</sup> <a name="InEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId"></a>

```go
func InEntityId() *string
```

- *Type:* *string

---

##### `InTemplateId`<sup>Required</sup> <a name="InTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId"></a>

```go
func InTemplateId() *string
```

- *Type:* *string

---

##### `OriginationIdentity`<sup>Required</sup> <a name="OriginationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity"></a>

```go
func OriginationIdentity() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpoolregionalconfigurationattachment"

cognitouserpoolregionalconfigurationattachment.NewCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms">PutEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetEumsSms">ResetEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsCallerArn">ResetSnsCallerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsRegion">ResetSnsRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEumsSms` <a name="PutEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms"></a>

```go
func PutEumsSms(value CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---

##### `ResetEumsSms` <a name="ResetEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetEumsSms"></a>

```go
func ResetEumsSms()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetSnsCallerArn` <a name="ResetSnsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsCallerArn"></a>

```go
func ResetSnsCallerArn()
```

##### `ResetSnsRegion` <a name="ResetSnsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsRegion"></a>

```go
func ResetSnsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms">EumsSms</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSmsInput">EumsSmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArnInput">SnsCallerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegionInput">SnsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn">SnsCallerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion">SnsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EumsSms`<sup>Required</sup> <a name="EumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms"></a>

```go
func EumsSms() CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a>

---

##### `EumsSmsInput`<sup>Optional</sup> <a name="EumsSmsInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSmsInput"></a>

```go
func EumsSmsInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `SnsCallerArnInput`<sup>Optional</sup> <a name="SnsCallerArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArnInput"></a>

```go
func SnsCallerArnInput() *string
```

- *Type:* *string

---

##### `SnsRegionInput`<sup>Optional</sup> <a name="SnsRegionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegionInput"></a>

```go
func SnsRegionInput() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `SnsCallerArn`<sup>Required</sup> <a name="SnsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn"></a>

```go
func SnsCallerArn() *string
```

- *Type:* *string

---

##### `SnsRegion`<sup>Required</sup> <a name="SnsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion"></a>

```go
func SnsRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



