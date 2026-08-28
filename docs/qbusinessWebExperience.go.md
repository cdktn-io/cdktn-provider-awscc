# `qbusinessWebExperience` Submodule <a name="`qbusinessWebExperience` Submodule" id="@cdktn/provider-awscc.qbusinessWebExperience"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessWebExperience <a name="QbusinessWebExperience" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience awscc_qbusiness_web_experience}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.NewQbusinessWebExperience(scope Construct, id *string, config QbusinessWebExperienceConfig) QbusinessWebExperience
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig">QbusinessWebExperienceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig">QbusinessWebExperienceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration">PutBrowserExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration">PutCustomizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration">PutIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetBrowserExtensionConfiguration">ResetBrowserExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetCustomizationConfiguration">ResetCustomizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetIdentityProviderConfiguration">ResetIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOrigins">ResetOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSamplePromptsControlMode">ResetSamplePromptsControlMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSubtitle">ResetSubtitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetWelcomeMessage">ResetWelcomeMessage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBrowserExtensionConfiguration` <a name="PutBrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration"></a>

```go
func PutBrowserExtensionConfiguration(value QbusinessWebExperienceBrowserExtensionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

---

##### `PutCustomizationConfiguration` <a name="PutCustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration"></a>

```go
func PutCustomizationConfiguration(value QbusinessWebExperienceCustomizationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

---

##### `PutIdentityProviderConfiguration` <a name="PutIdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration"></a>

```go
func PutIdentityProviderConfiguration(value QbusinessWebExperienceIdentityProviderConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBrowserExtensionConfiguration` <a name="ResetBrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetBrowserExtensionConfiguration"></a>

```go
func ResetBrowserExtensionConfiguration()
```

##### `ResetCustomizationConfiguration` <a name="ResetCustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetCustomizationConfiguration"></a>

```go
func ResetCustomizationConfiguration()
```

##### `ResetIdentityProviderConfiguration` <a name="ResetIdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetIdentityProviderConfiguration"></a>

```go
func ResetIdentityProviderConfiguration()
```

##### `ResetOrigins` <a name="ResetOrigins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOrigins"></a>

```go
func ResetOrigins()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSamplePromptsControlMode` <a name="ResetSamplePromptsControlMode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSamplePromptsControlMode"></a>

```go
func ResetSamplePromptsControlMode()
```

##### `ResetSubtitle` <a name="ResetSubtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSubtitle"></a>

```go
func ResetSubtitle()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetWelcomeMessage` <a name="ResetWelcomeMessage" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetWelcomeMessage"></a>

```go
func ResetWelcomeMessage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessWebExperience resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.QbusinessWebExperience_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.QbusinessWebExperience_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.QbusinessWebExperience_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.QbusinessWebExperience_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QbusinessWebExperience resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QbusinessWebExperience to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QbusinessWebExperience that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessWebExperience to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfiguration">BrowserExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference">QbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfiguration">CustomizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference">QbusinessWebExperienceCustomizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.defaultEndpoint">DefaultEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList">QbusinessWebExperienceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceArn">WebExperienceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceId">WebExperienceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfigurationInput">BrowserExtensionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfigurationInput">CustomizationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfigurationInput">IdentityProviderConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.originsInput">OriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlModeInput">SamplePromptsControlModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitleInput">SubtitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessageInput">WelcomeMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.origins">Origins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlMode">SamplePromptsControlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitle">Subtitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessage">WelcomeMessage</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BrowserExtensionConfiguration`<sup>Required</sup> <a name="BrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfiguration"></a>

```go
func BrowserExtensionConfiguration() QbusinessWebExperienceBrowserExtensionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference">QbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomizationConfiguration`<sup>Required</sup> <a name="CustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfiguration"></a>

```go
func CustomizationConfiguration() QbusinessWebExperienceCustomizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference">QbusinessWebExperienceCustomizationConfigurationOutputReference</a>

---

##### `DefaultEndpoint`<sup>Required</sup> <a name="DefaultEndpoint" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.defaultEndpoint"></a>

```go
func DefaultEndpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityProviderConfiguration`<sup>Required</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfiguration"></a>

```go
func IdentityProviderConfiguration() QbusinessWebExperienceIdentityProviderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tags"></a>

```go
func Tags() QbusinessWebExperienceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList">QbusinessWebExperienceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `WebExperienceArn`<sup>Required</sup> <a name="WebExperienceArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceArn"></a>

```go
func WebExperienceArn() *string
```

- *Type:* *string

---

##### `WebExperienceId`<sup>Required</sup> <a name="WebExperienceId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceId"></a>

```go
func WebExperienceId() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `BrowserExtensionConfigurationInput`<sup>Optional</sup> <a name="BrowserExtensionConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfigurationInput"></a>

```go
func BrowserExtensionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `CustomizationConfigurationInput`<sup>Optional</sup> <a name="CustomizationConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfigurationInput"></a>

```go
func CustomizationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityProviderConfigurationInput`<sup>Optional</sup> <a name="IdentityProviderConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfigurationInput"></a>

```go
func IdentityProviderConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `OriginsInput`<sup>Optional</sup> <a name="OriginsInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.originsInput"></a>

```go
func OriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SamplePromptsControlModeInput`<sup>Optional</sup> <a name="SamplePromptsControlModeInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlModeInput"></a>

```go
func SamplePromptsControlModeInput() *string
```

- *Type:* *string

---

##### `SubtitleInput`<sup>Optional</sup> <a name="SubtitleInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitleInput"></a>

```go
func SubtitleInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WelcomeMessageInput`<sup>Optional</sup> <a name="WelcomeMessageInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessageInput"></a>

```go
func WelcomeMessageInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.origins"></a>

```go
func Origins() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SamplePromptsControlMode`<sup>Required</sup> <a name="SamplePromptsControlMode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlMode"></a>

```go
func SamplePromptsControlMode() *string
```

- *Type:* *string

---

##### `Subtitle`<sup>Required</sup> <a name="Subtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitle"></a>

```go
func Subtitle() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `WelcomeMessage`<sup>Required</sup> <a name="WelcomeMessage" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessage"></a>

```go
func WelcomeMessage() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessWebExperienceBrowserExtensionConfiguration <a name="QbusinessWebExperienceBrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

&qbusinesswebexperience.QbusinessWebExperienceBrowserExtensionConfiguration {
	EnabledBrowserExtensions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.property.enabledBrowserExtensions">EnabledBrowserExtensions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#enabled_browser_extensions QbusinessWebExperience#enabled_browser_extensions}. |

---

##### `EnabledBrowserExtensions`<sup>Optional</sup> <a name="EnabledBrowserExtensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.property.enabledBrowserExtensions"></a>

```go
EnabledBrowserExtensions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#enabled_browser_extensions QbusinessWebExperience#enabled_browser_extensions}.

---

### QbusinessWebExperienceConfig <a name="QbusinessWebExperienceConfig" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

&qbusinesswebexperience.QbusinessWebExperienceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	BrowserExtensionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration,
	CustomizationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration,
	IdentityProviderConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration,
	Origins: *[]*string,
	RoleArn: *string,
	SamplePromptsControlMode: *string,
	Subtitle: *string,
	Tags: interface{},
	Title: *string,
	WelcomeMessage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#application_id QbusinessWebExperience#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.browserExtensionConfiguration">BrowserExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#browser_extension_configuration QbusinessWebExperience#browser_extension_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.customizationConfiguration">CustomizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#customization_configuration QbusinessWebExperience#customization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#identity_provider_configuration QbusinessWebExperience#identity_provider_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.origins">Origins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#origins QbusinessWebExperience#origins}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#role_arn QbusinessWebExperience#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.samplePromptsControlMode">SamplePromptsControlMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#sample_prompts_control_mode QbusinessWebExperience#sample_prompts_control_mode}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.subtitle">Subtitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#subtitle QbusinessWebExperience#subtitle}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#tags QbusinessWebExperience#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#title QbusinessWebExperience#title}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.welcomeMessage">WelcomeMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#welcome_message QbusinessWebExperience#welcome_message}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#application_id QbusinessWebExperience#application_id}.

---

##### `BrowserExtensionConfiguration`<sup>Optional</sup> <a name="BrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.browserExtensionConfiguration"></a>

```go
BrowserExtensionConfiguration QbusinessWebExperienceBrowserExtensionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#browser_extension_configuration QbusinessWebExperience#browser_extension_configuration}.

---

##### `CustomizationConfiguration`<sup>Optional</sup> <a name="CustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.customizationConfiguration"></a>

```go
CustomizationConfiguration QbusinessWebExperienceCustomizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#customization_configuration QbusinessWebExperience#customization_configuration}.

---

##### `IdentityProviderConfiguration`<sup>Optional</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.identityProviderConfiguration"></a>

```go
IdentityProviderConfiguration QbusinessWebExperienceIdentityProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#identity_provider_configuration QbusinessWebExperience#identity_provider_configuration}.

---

##### `Origins`<sup>Optional</sup> <a name="Origins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.origins"></a>

```go
Origins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#origins QbusinessWebExperience#origins}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#role_arn QbusinessWebExperience#role_arn}.

---

##### `SamplePromptsControlMode`<sup>Optional</sup> <a name="SamplePromptsControlMode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.samplePromptsControlMode"></a>

```go
SamplePromptsControlMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#sample_prompts_control_mode QbusinessWebExperience#sample_prompts_control_mode}.

---

##### `Subtitle`<sup>Optional</sup> <a name="Subtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.subtitle"></a>

```go
Subtitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#subtitle QbusinessWebExperience#subtitle}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#tags QbusinessWebExperience#tags}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#title QbusinessWebExperience#title}.

---

##### `WelcomeMessage`<sup>Optional</sup> <a name="WelcomeMessage" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.welcomeMessage"></a>

```go
WelcomeMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#welcome_message QbusinessWebExperience#welcome_message}.

---

### QbusinessWebExperienceCustomizationConfiguration <a name="QbusinessWebExperienceCustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

&qbusinesswebexperience.QbusinessWebExperienceCustomizationConfiguration {
	CustomCssUrl: *string,
	FaviconUrl: *string,
	FontUrl: *string,
	LogoUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.customCssUrl">CustomCssUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#custom_css_url QbusinessWebExperience#custom_css_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.faviconUrl">FaviconUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#favicon_url QbusinessWebExperience#favicon_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.fontUrl">FontUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#font_url QbusinessWebExperience#font_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#logo_url QbusinessWebExperience#logo_url}. |

---

##### `CustomCssUrl`<sup>Optional</sup> <a name="CustomCssUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.customCssUrl"></a>

```go
CustomCssUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#custom_css_url QbusinessWebExperience#custom_css_url}.

---

##### `FaviconUrl`<sup>Optional</sup> <a name="FaviconUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.faviconUrl"></a>

```go
FaviconUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#favicon_url QbusinessWebExperience#favicon_url}.

---

##### `FontUrl`<sup>Optional</sup> <a name="FontUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.fontUrl"></a>

```go
FontUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#font_url QbusinessWebExperience#font_url}.

---

##### `LogoUrl`<sup>Optional</sup> <a name="LogoUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.logoUrl"></a>

```go
LogoUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#logo_url QbusinessWebExperience#logo_url}.

---

### QbusinessWebExperienceIdentityProviderConfiguration <a name="QbusinessWebExperienceIdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

&qbusinesswebexperience.QbusinessWebExperienceIdentityProviderConfiguration {
	OpenIdConnectConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration,
	SamlConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.openIdConnectConfiguration">OpenIdConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#open_id_connect_configuration QbusinessWebExperience#open_id_connect_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.samlConfiguration">SamlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#saml_configuration QbusinessWebExperience#saml_configuration}. |

---

##### `OpenIdConnectConfiguration`<sup>Optional</sup> <a name="OpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.openIdConnectConfiguration"></a>

```go
OpenIdConnectConfiguration QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#open_id_connect_configuration QbusinessWebExperience#open_id_connect_configuration}.

---

##### `SamlConfiguration`<sup>Optional</sup> <a name="SamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.samlConfiguration"></a>

```go
SamlConfiguration QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#saml_configuration QbusinessWebExperience#saml_configuration}.

---

### QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration <a name="QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

&qbusinesswebexperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration {
	SecretsArn: *string,
	SecretsRole: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsArn">SecretsArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#secrets_arn QbusinessWebExperience#secrets_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsRole">SecretsRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#secrets_role QbusinessWebExperience#secrets_role}. |

---

##### `SecretsArn`<sup>Optional</sup> <a name="SecretsArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsArn"></a>

```go
SecretsArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#secrets_arn QbusinessWebExperience#secrets_arn}.

---

##### `SecretsRole`<sup>Optional</sup> <a name="SecretsRole" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsRole"></a>

```go
SecretsRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#secrets_role QbusinessWebExperience#secrets_role}.

---

### QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration <a name="QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

&qbusinesswebexperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration {
	AuthenticationUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.property.authenticationUrl">AuthenticationUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#authentication_url QbusinessWebExperience#authentication_url}. |

---

##### `AuthenticationUrl`<sup>Optional</sup> <a name="AuthenticationUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.property.authenticationUrl"></a>

```go
AuthenticationUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#authentication_url QbusinessWebExperience#authentication_url}.

---

### QbusinessWebExperienceTags <a name="QbusinessWebExperienceTags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

&qbusinesswebexperience.QbusinessWebExperienceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#key QbusinessWebExperience#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#value QbusinessWebExperience#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#key QbusinessWebExperience#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_web_experience#value QbusinessWebExperience#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessWebExperienceBrowserExtensionConfigurationOutputReference <a name="QbusinessWebExperienceBrowserExtensionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.NewQbusinessWebExperienceBrowserExtensionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessWebExperienceBrowserExtensionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resetEnabledBrowserExtensions">ResetEnabledBrowserExtensions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabledBrowserExtensions` <a name="ResetEnabledBrowserExtensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resetEnabledBrowserExtensions"></a>

```go
func ResetEnabledBrowserExtensions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensionsInput">EnabledBrowserExtensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions">EnabledBrowserExtensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledBrowserExtensionsInput`<sup>Optional</sup> <a name="EnabledBrowserExtensionsInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensionsInput"></a>

```go
func EnabledBrowserExtensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledBrowserExtensions`<sup>Required</sup> <a name="EnabledBrowserExtensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions"></a>

```go
func EnabledBrowserExtensions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessWebExperienceCustomizationConfigurationOutputReference <a name="QbusinessWebExperienceCustomizationConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.NewQbusinessWebExperienceCustomizationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessWebExperienceCustomizationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetCustomCssUrl">ResetCustomCssUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFaviconUrl">ResetFaviconUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFontUrl">ResetFontUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetLogoUrl">ResetLogoUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomCssUrl` <a name="ResetCustomCssUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetCustomCssUrl"></a>

```go
func ResetCustomCssUrl()
```

##### `ResetFaviconUrl` <a name="ResetFaviconUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFaviconUrl"></a>

```go
func ResetFaviconUrl()
```

##### `ResetFontUrl` <a name="ResetFontUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFontUrl"></a>

```go
func ResetFontUrl()
```

##### `ResetLogoUrl` <a name="ResetLogoUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetLogoUrl"></a>

```go
func ResetLogoUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrlInput">CustomCssUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrlInput">FaviconUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrlInput">FontUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrlInput">LogoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl">CustomCssUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl">FaviconUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl">FontUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomCssUrlInput`<sup>Optional</sup> <a name="CustomCssUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrlInput"></a>

```go
func CustomCssUrlInput() *string
```

- *Type:* *string

---

##### `FaviconUrlInput`<sup>Optional</sup> <a name="FaviconUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrlInput"></a>

```go
func FaviconUrlInput() *string
```

- *Type:* *string

---

##### `FontUrlInput`<sup>Optional</sup> <a name="FontUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrlInput"></a>

```go
func FontUrlInput() *string
```

- *Type:* *string

---

##### `LogoUrlInput`<sup>Optional</sup> <a name="LogoUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrlInput"></a>

```go
func LogoUrlInput() *string
```

- *Type:* *string

---

##### `CustomCssUrl`<sup>Required</sup> <a name="CustomCssUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl"></a>

```go
func CustomCssUrl() *string
```

- *Type:* *string

---

##### `FaviconUrl`<sup>Required</sup> <a name="FaviconUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl"></a>

```go
func FaviconUrl() *string
```

- *Type:* *string

---

##### `FontUrl`<sup>Required</sup> <a name="FontUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl"></a>

```go
func FontUrl() *string
```

- *Type:* *string

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.NewQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsArn">ResetSecretsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsRole">ResetSecretsRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretsArn` <a name="ResetSecretsArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsArn"></a>

```go
func ResetSecretsArn()
```

##### `ResetSecretsRole` <a name="ResetSecretsRole" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsRole"></a>

```go
func ResetSecretsRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArnInput">SecretsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRoleInput">SecretsRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn">SecretsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole">SecretsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretsArnInput`<sup>Optional</sup> <a name="SecretsArnInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArnInput"></a>

```go
func SecretsArnInput() *string
```

- *Type:* *string

---

##### `SecretsRoleInput`<sup>Optional</sup> <a name="SecretsRoleInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRoleInput"></a>

```go
func SecretsRoleInput() *string
```

- *Type:* *string

---

##### `SecretsArn`<sup>Required</sup> <a name="SecretsArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn"></a>

```go
func SecretsArn() *string
```

- *Type:* *string

---

##### `SecretsRole`<sup>Required</sup> <a name="SecretsRole" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole"></a>

```go
func SecretsRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessWebExperienceIdentityProviderConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.NewQbusinessWebExperienceIdentityProviderConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessWebExperienceIdentityProviderConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration">PutOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration">PutSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetOpenIdConnectConfiguration">ResetOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetSamlConfiguration">ResetSamlConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOpenIdConnectConfiguration` <a name="PutOpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration"></a>

```go
func PutOpenIdConnectConfiguration(value QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---

##### `PutSamlConfiguration` <a name="PutSamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration"></a>

```go
func PutSamlConfiguration(value QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---

##### `ResetOpenIdConnectConfiguration` <a name="ResetOpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetOpenIdConnectConfiguration"></a>

```go
func ResetOpenIdConnectConfiguration()
```

##### `ResetSamlConfiguration` <a name="ResetSamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetSamlConfiguration"></a>

```go
func ResetSamlConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration">OpenIdConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration">SamlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfigurationInput">OpenIdConnectConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfigurationInput">SamlConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OpenIdConnectConfiguration`<sup>Required</sup> <a name="OpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration"></a>

```go
func OpenIdConnectConfiguration() QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a>

---

##### `SamlConfiguration`<sup>Required</sup> <a name="SamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration"></a>

```go
func SamlConfiguration() QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a>

---

##### `OpenIdConnectConfigurationInput`<sup>Optional</sup> <a name="OpenIdConnectConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfigurationInput"></a>

```go
func OpenIdConnectConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SamlConfigurationInput`<sup>Optional</sup> <a name="SamlConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfigurationInput"></a>

```go
func SamlConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.NewQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resetAuthenticationUrl">ResetAuthenticationUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationUrl` <a name="ResetAuthenticationUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resetAuthenticationUrl"></a>

```go
func ResetAuthenticationUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrlInput">AuthenticationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl">AuthenticationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationUrlInput`<sup>Optional</sup> <a name="AuthenticationUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrlInput"></a>

```go
func AuthenticationUrlInput() *string
```

- *Type:* *string

---

##### `AuthenticationUrl`<sup>Required</sup> <a name="AuthenticationUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl"></a>

```go
func AuthenticationUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessWebExperienceTagsList <a name="QbusinessWebExperienceTagsList" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.NewQbusinessWebExperienceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QbusinessWebExperienceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get"></a>

```go
func Get(index *f64) QbusinessWebExperienceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessWebExperienceTagsOutputReference <a name="QbusinessWebExperienceTagsOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinesswebexperience"

qbusinesswebexperience.NewQbusinessWebExperienceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QbusinessWebExperienceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



