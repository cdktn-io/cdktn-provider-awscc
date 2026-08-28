# `workspaceswebUserSettings` Submodule <a name="`workspaceswebUserSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebUserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebUserSettings <a name="WorkspaceswebUserSettings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings awscc_workspacesweb_user_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettings(scope Construct, id *string, config WorkspaceswebUserSettingsConfig) WorkspaceswebUserSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig">WorkspaceswebUserSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig">WorkspaceswebUserSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration">PutBrandingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration">PutCookieSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration">PutToolbarConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetAdditionalEncryptionContext">ResetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetBrandingConfiguration">ResetBrandingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCookieSynchronizationConfiguration">ResetCookieSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDeepLinkAllowed">ResetDeepLinkAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDisconnectTimeoutInMinutes">ResetDisconnectTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetIdleDisconnectTimeoutInMinutes">ResetIdleDisconnectTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetToolbarConfiguration">ResetToolbarConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetWebAuthnAllowed">ResetWebAuthnAllowed</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBrandingConfiguration` <a name="PutBrandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration"></a>

```go
func PutBrandingConfiguration(value WorkspaceswebUserSettingsBrandingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a>

---

##### `PutCookieSynchronizationConfiguration` <a name="PutCookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration"></a>

```go
func PutCookieSynchronizationConfiguration(value WorkspaceswebUserSettingsCookieSynchronizationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutToolbarConfiguration` <a name="PutToolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration"></a>

```go
func PutToolbarConfiguration(value WorkspaceswebUserSettingsToolbarConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

---

##### `ResetAdditionalEncryptionContext` <a name="ResetAdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetAdditionalEncryptionContext"></a>

```go
func ResetAdditionalEncryptionContext()
```

##### `ResetBrandingConfiguration` <a name="ResetBrandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetBrandingConfiguration"></a>

```go
func ResetBrandingConfiguration()
```

##### `ResetCookieSynchronizationConfiguration` <a name="ResetCookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCookieSynchronizationConfiguration"></a>

```go
func ResetCookieSynchronizationConfiguration()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCustomerManagedKey"></a>

```go
func ResetCustomerManagedKey()
```

##### `ResetDeepLinkAllowed` <a name="ResetDeepLinkAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDeepLinkAllowed"></a>

```go
func ResetDeepLinkAllowed()
```

##### `ResetDisconnectTimeoutInMinutes` <a name="ResetDisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDisconnectTimeoutInMinutes"></a>

```go
func ResetDisconnectTimeoutInMinutes()
```

##### `ResetIdleDisconnectTimeoutInMinutes` <a name="ResetIdleDisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetIdleDisconnectTimeoutInMinutes"></a>

```go
func ResetIdleDisconnectTimeoutInMinutes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetTags"></a>

```go
func ResetTags()
```

##### `ResetToolbarConfiguration` <a name="ResetToolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetToolbarConfiguration"></a>

```go
func ResetToolbarConfiguration()
```

##### `ResetWebAuthnAllowed` <a name="ResetWebAuthnAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetWebAuthnAllowed"></a>

```go
func ResetWebAuthnAllowed()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.WorkspaceswebUserSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.WorkspaceswebUserSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.WorkspaceswebUserSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.WorkspaceswebUserSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspaceswebUserSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspaceswebUserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebUserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfiguration">BrandingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference">WorkspaceswebUserSettingsBrandingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfiguration">CookieSynchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference">WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList">WorkspaceswebUserSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfiguration">ToolbarConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference">WorkspaceswebUserSettingsToolbarConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.userSettingsArn">UserSettingsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContextInput">AdditionalEncryptionContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfigurationInput">BrandingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfigurationInput">CookieSynchronizationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowedInput">CopyAllowedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowedInput">DeepLinkAllowedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutesInput">DisconnectTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowedInput">DownloadAllowedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutesInput">IdleDisconnectTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowedInput">PasteAllowedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowedInput">PrintAllowedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfigurationInput">ToolbarConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowedInput">UploadAllowedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowedInput">WebAuthnAllowedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowed">CopyAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowed">DeepLinkAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutes">DisconnectTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowed">DownloadAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes">IdleDisconnectTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowed">PasteAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowed">PrintAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowed">UploadAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowed">WebAuthnAllowed</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.associatedPortalArns"></a>

```go
func AssociatedPortalArns() *[]*string
```

- *Type:* *[]*string

---

##### `BrandingConfiguration`<sup>Required</sup> <a name="BrandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfiguration"></a>

```go
func BrandingConfiguration() WorkspaceswebUserSettingsBrandingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference">WorkspaceswebUserSettingsBrandingConfigurationOutputReference</a>

---

##### `CookieSynchronizationConfiguration`<sup>Required</sup> <a name="CookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfiguration"></a>

```go
func CookieSynchronizationConfiguration() WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference">WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tags"></a>

```go
func Tags() WorkspaceswebUserSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList">WorkspaceswebUserSettingsTagsList</a>

---

##### `ToolbarConfiguration`<sup>Required</sup> <a name="ToolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfiguration"></a>

```go
func ToolbarConfiguration() WorkspaceswebUserSettingsToolbarConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference">WorkspaceswebUserSettingsToolbarConfigurationOutputReference</a>

---

##### `UserSettingsArn`<sup>Required</sup> <a name="UserSettingsArn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.userSettingsArn"></a>

```go
func UserSettingsArn() *string
```

- *Type:* *string

---

##### `AdditionalEncryptionContextInput`<sup>Optional</sup> <a name="AdditionalEncryptionContextInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContextInput"></a>

```go
func AdditionalEncryptionContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BrandingConfigurationInput`<sup>Optional</sup> <a name="BrandingConfigurationInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfigurationInput"></a>

```go
func BrandingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `CookieSynchronizationConfigurationInput`<sup>Optional</sup> <a name="CookieSynchronizationConfigurationInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfigurationInput"></a>

```go
func CookieSynchronizationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `CopyAllowedInput`<sup>Optional</sup> <a name="CopyAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowedInput"></a>

```go
func CopyAllowedInput() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKeyInput"></a>

```go
func CustomerManagedKeyInput() *string
```

- *Type:* *string

---

##### `DeepLinkAllowedInput`<sup>Optional</sup> <a name="DeepLinkAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowedInput"></a>

```go
func DeepLinkAllowedInput() *string
```

- *Type:* *string

---

##### `DisconnectTimeoutInMinutesInput`<sup>Optional</sup> <a name="DisconnectTimeoutInMinutesInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutesInput"></a>

```go
func DisconnectTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `DownloadAllowedInput`<sup>Optional</sup> <a name="DownloadAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowedInput"></a>

```go
func DownloadAllowedInput() *string
```

- *Type:* *string

---

##### `IdleDisconnectTimeoutInMinutesInput`<sup>Optional</sup> <a name="IdleDisconnectTimeoutInMinutesInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutesInput"></a>

```go
func IdleDisconnectTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `PasteAllowedInput`<sup>Optional</sup> <a name="PasteAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowedInput"></a>

```go
func PasteAllowedInput() *string
```

- *Type:* *string

---

##### `PrintAllowedInput`<sup>Optional</sup> <a name="PrintAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowedInput"></a>

```go
func PrintAllowedInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ToolbarConfigurationInput`<sup>Optional</sup> <a name="ToolbarConfigurationInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfigurationInput"></a>

```go
func ToolbarConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `UploadAllowedInput`<sup>Optional</sup> <a name="UploadAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowedInput"></a>

```go
func UploadAllowedInput() *string
```

- *Type:* *string

---

##### `WebAuthnAllowedInput`<sup>Optional</sup> <a name="WebAuthnAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowedInput"></a>

```go
func WebAuthnAllowedInput() *string
```

- *Type:* *string

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContext"></a>

```go
func AdditionalEncryptionContext() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CopyAllowed`<sup>Required</sup> <a name="CopyAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowed"></a>

```go
func CopyAllowed() *string
```

- *Type:* *string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKey"></a>

```go
func CustomerManagedKey() *string
```

- *Type:* *string

---

##### `DeepLinkAllowed`<sup>Required</sup> <a name="DeepLinkAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowed"></a>

```go
func DeepLinkAllowed() *string
```

- *Type:* *string

---

##### `DisconnectTimeoutInMinutes`<sup>Required</sup> <a name="DisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutes"></a>

```go
func DisconnectTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `DownloadAllowed`<sup>Required</sup> <a name="DownloadAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowed"></a>

```go
func DownloadAllowed() *string
```

- *Type:* *string

---

##### `IdleDisconnectTimeoutInMinutes`<sup>Required</sup> <a name="IdleDisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes"></a>

```go
func IdleDisconnectTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `PasteAllowed`<sup>Required</sup> <a name="PasteAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowed"></a>

```go
func PasteAllowed() *string
```

- *Type:* *string

---

##### `PrintAllowed`<sup>Required</sup> <a name="PrintAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowed"></a>

```go
func PrintAllowed() *string
```

- *Type:* *string

---

##### `UploadAllowed`<sup>Required</sup> <a name="UploadAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowed"></a>

```go
func UploadAllowed() *string
```

- *Type:* *string

---

##### `WebAuthnAllowed`<sup>Required</sup> <a name="WebAuthnAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowed"></a>

```go
func WebAuthnAllowed() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebUserSettingsBrandingConfiguration <a name="WorkspaceswebUserSettingsBrandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsBrandingConfiguration {
	ColorTheme: *string,
	Favicon: *string,
	LocalizedStrings: interface{},
	Logo: *string,
	TermsOfService: *string,
	Wallpaper: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.colorTheme">ColorTheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#color_theme WorkspaceswebUserSettings#color_theme}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.favicon">Favicon</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#favicon WorkspaceswebUserSettings#favicon}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.localizedStrings">LocalizedStrings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#localized_strings WorkspaceswebUserSettings#localized_strings}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.logo">Logo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#logo WorkspaceswebUserSettings#logo}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.termsOfService">TermsOfService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#terms_of_service WorkspaceswebUserSettings#terms_of_service}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.wallpaper">Wallpaper</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#wallpaper WorkspaceswebUserSettings#wallpaper}. |

---

##### `ColorTheme`<sup>Optional</sup> <a name="ColorTheme" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.colorTheme"></a>

```go
ColorTheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#color_theme WorkspaceswebUserSettings#color_theme}.

---

##### `Favicon`<sup>Optional</sup> <a name="Favicon" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.favicon"></a>

```go
Favicon *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#favicon WorkspaceswebUserSettings#favicon}.

---

##### `LocalizedStrings`<sup>Optional</sup> <a name="LocalizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.localizedStrings"></a>

```go
LocalizedStrings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#localized_strings WorkspaceswebUserSettings#localized_strings}.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#logo WorkspaceswebUserSettings#logo}.

---

##### `TermsOfService`<sup>Optional</sup> <a name="TermsOfService" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.termsOfService"></a>

```go
TermsOfService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#terms_of_service WorkspaceswebUserSettings#terms_of_service}.

---

##### `Wallpaper`<sup>Optional</sup> <a name="Wallpaper" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.wallpaper"></a>

```go
Wallpaper *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#wallpaper WorkspaceswebUserSettings#wallpaper}.

---

### WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata <a name="WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata {

}
```


### WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings <a name="WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings {
	BrowserTabTitle: *string,
	ContactButtonText: *string,
	ContactLink: *string,
	LoadingText: *string,
	LoginButtonText: *string,
	LoginDescription: *string,
	LoginTitle: *string,
	WelcomeText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.browserTabTitle">BrowserTabTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#browser_tab_title WorkspaceswebUserSettings#browser_tab_title}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactButtonText">ContactButtonText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#contact_button_text WorkspaceswebUserSettings#contact_button_text}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactLink">ContactLink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#contact_link WorkspaceswebUserSettings#contact_link}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loadingText">LoadingText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#loading_text WorkspaceswebUserSettings#loading_text}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginButtonText">LoginButtonText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#login_button_text WorkspaceswebUserSettings#login_button_text}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginDescription">LoginDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#login_description WorkspaceswebUserSettings#login_description}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginTitle">LoginTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#login_title WorkspaceswebUserSettings#login_title}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.welcomeText">WelcomeText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#welcome_text WorkspaceswebUserSettings#welcome_text}. |

---

##### `BrowserTabTitle`<sup>Optional</sup> <a name="BrowserTabTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.browserTabTitle"></a>

```go
BrowserTabTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#browser_tab_title WorkspaceswebUserSettings#browser_tab_title}.

---

##### `ContactButtonText`<sup>Optional</sup> <a name="ContactButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactButtonText"></a>

```go
ContactButtonText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#contact_button_text WorkspaceswebUserSettings#contact_button_text}.

---

##### `ContactLink`<sup>Optional</sup> <a name="ContactLink" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactLink"></a>

```go
ContactLink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#contact_link WorkspaceswebUserSettings#contact_link}.

---

##### `LoadingText`<sup>Optional</sup> <a name="LoadingText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loadingText"></a>

```go
LoadingText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#loading_text WorkspaceswebUserSettings#loading_text}.

---

##### `LoginButtonText`<sup>Optional</sup> <a name="LoginButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginButtonText"></a>

```go
LoginButtonText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#login_button_text WorkspaceswebUserSettings#login_button_text}.

---

##### `LoginDescription`<sup>Optional</sup> <a name="LoginDescription" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginDescription"></a>

```go
LoginDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#login_description WorkspaceswebUserSettings#login_description}.

---

##### `LoginTitle`<sup>Optional</sup> <a name="LoginTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginTitle"></a>

```go
LoginTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#login_title WorkspaceswebUserSettings#login_title}.

---

##### `WelcomeText`<sup>Optional</sup> <a name="WelcomeText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.welcomeText"></a>

```go
WelcomeText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#welcome_text WorkspaceswebUserSettings#welcome_text}.

---

### WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata <a name="WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata {

}
```


### WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata <a name="WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata {

}
```


### WorkspaceswebUserSettingsConfig <a name="WorkspaceswebUserSettingsConfig" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CopyAllowed: *string,
	DownloadAllowed: *string,
	PasteAllowed: *string,
	PrintAllowed: *string,
	UploadAllowed: *string,
	AdditionalEncryptionContext: *map[string]*string,
	BrandingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration,
	CookieSynchronizationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration,
	CustomerManagedKey: *string,
	DeepLinkAllowed: *string,
	DisconnectTimeoutInMinutes: *f64,
	IdleDisconnectTimeoutInMinutes: *f64,
	Tags: interface{},
	ToolbarConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration,
	WebAuthnAllowed: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.copyAllowed">CopyAllowed</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.downloadAllowed">DownloadAllowed</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.pasteAllowed">PasteAllowed</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.printAllowed">PrintAllowed</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.uploadAllowed">UploadAllowed</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.brandingConfiguration">BrandingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#branding_configuration WorkspaceswebUserSettings#branding_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.cookieSynchronizationConfiguration">CookieSynchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.deepLinkAllowed">DeepLinkAllowed</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.disconnectTimeoutInMinutes">DisconnectTimeoutInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.idleDisconnectTimeoutInMinutes">IdleDisconnectTimeoutInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.toolbarConfiguration">ToolbarConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.webAuthnAllowed">WebAuthnAllowed</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#web_authn_allowed WorkspaceswebUserSettings#web_authn_allowed}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CopyAllowed`<sup>Required</sup> <a name="CopyAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.copyAllowed"></a>

```go
CopyAllowed *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}.

---

##### `DownloadAllowed`<sup>Required</sup> <a name="DownloadAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.downloadAllowed"></a>

```go
DownloadAllowed *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}.

---

##### `PasteAllowed`<sup>Required</sup> <a name="PasteAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.pasteAllowed"></a>

```go
PasteAllowed *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}.

---

##### `PrintAllowed`<sup>Required</sup> <a name="PrintAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.printAllowed"></a>

```go
PrintAllowed *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}.

---

##### `UploadAllowed`<sup>Required</sup> <a name="UploadAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.uploadAllowed"></a>

```go
UploadAllowed *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}.

---

##### `AdditionalEncryptionContext`<sup>Optional</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.additionalEncryptionContext"></a>

```go
AdditionalEncryptionContext *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}.

---

##### `BrandingConfiguration`<sup>Optional</sup> <a name="BrandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.brandingConfiguration"></a>

```go
BrandingConfiguration WorkspaceswebUserSettingsBrandingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#branding_configuration WorkspaceswebUserSettings#branding_configuration}.

---

##### `CookieSynchronizationConfiguration`<sup>Optional</sup> <a name="CookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.cookieSynchronizationConfiguration"></a>

```go
CookieSynchronizationConfiguration WorkspaceswebUserSettingsCookieSynchronizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.customerManagedKey"></a>

```go
CustomerManagedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}.

---

##### `DeepLinkAllowed`<sup>Optional</sup> <a name="DeepLinkAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.deepLinkAllowed"></a>

```go
DeepLinkAllowed *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}.

---

##### `DisconnectTimeoutInMinutes`<sup>Optional</sup> <a name="DisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.disconnectTimeoutInMinutes"></a>

```go
DisconnectTimeoutInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}.

---

##### `IdleDisconnectTimeoutInMinutes`<sup>Optional</sup> <a name="IdleDisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.idleDisconnectTimeoutInMinutes"></a>

```go
IdleDisconnectTimeoutInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}.

---

##### `ToolbarConfiguration`<sup>Optional</sup> <a name="ToolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.toolbarConfiguration"></a>

```go
ToolbarConfiguration WorkspaceswebUserSettingsToolbarConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}.

---

##### `WebAuthnAllowed`<sup>Optional</sup> <a name="WebAuthnAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.webAuthnAllowed"></a>

```go
WebAuthnAllowed *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#web_authn_allowed WorkspaceswebUserSettings#web_authn_allowed}.

---

### WorkspaceswebUserSettingsCookieSynchronizationConfiguration <a name="WorkspaceswebUserSettingsCookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration {
	Allowlist: interface{},
	Blocklist: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.allowlist">Allowlist</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#allowlist WorkspaceswebUserSettings#allowlist}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.blocklist">Blocklist</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#blocklist WorkspaceswebUserSettings#blocklist}. |

---

##### `Allowlist`<sup>Optional</sup> <a name="Allowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.allowlist"></a>

```go
Allowlist interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#allowlist WorkspaceswebUserSettings#allowlist}.

---

##### `Blocklist`<sup>Optional</sup> <a name="Blocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.blocklist"></a>

```go
Blocklist interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#blocklist WorkspaceswebUserSettings#blocklist}.

---

### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct {
	Domain: *string,
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}. |

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}.

---

### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct {
	Domain: *string,
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}. |

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}.

---

### WorkspaceswebUserSettingsTags <a name="WorkspaceswebUserSettingsTags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#key WorkspaceswebUserSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#value WorkspaceswebUserSettings#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#key WorkspaceswebUserSettings#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#value WorkspaceswebUserSettings#value}.

---

### WorkspaceswebUserSettingsToolbarConfiguration <a name="WorkspaceswebUserSettingsToolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

&workspaceswebusersettings.WorkspaceswebUserSettingsToolbarConfiguration {
	HiddenToolbarItems: *[]*string,
	MaxDisplayResolution: *string,
	ToolbarType: *string,
	VisualMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.hiddenToolbarItems">HiddenToolbarItems</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.maxDisplayResolution">MaxDisplayResolution</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.toolbarType">ToolbarType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.visualMode">VisualMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}. |

---

##### `HiddenToolbarItems`<sup>Optional</sup> <a name="HiddenToolbarItems" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.hiddenToolbarItems"></a>

```go
HiddenToolbarItems *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}.

---

##### `MaxDisplayResolution`<sup>Optional</sup> <a name="MaxDisplayResolution" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.maxDisplayResolution"></a>

```go
MaxDisplayResolution *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}.

---

##### `ToolbarType`<sup>Optional</sup> <a name="ToolbarType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.toolbarType"></a>

```go
ToolbarType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}.

---

##### `VisualMode`<sup>Optional</sup> <a name="VisualMode" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.visualMode"></a>

```go
VisualMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.lastUploadTimestamp">LastUploadTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `LastUploadTimestamp`<sup>Required</sup> <a name="LastUploadTimestamp" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.lastUploadTimestamp"></a>

```go
func LastUploadTimestamp() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata</a>

---


### WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap <a name="WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get"></a>

```go
func Get(key *string) WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetBrowserTabTitle">ResetBrowserTabTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactButtonText">ResetContactButtonText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactLink">ResetContactLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoadingText">ResetLoadingText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginButtonText">ResetLoginButtonText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginDescription">ResetLoginDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginTitle">ResetLoginTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetWelcomeText">ResetWelcomeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBrowserTabTitle` <a name="ResetBrowserTabTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetBrowserTabTitle"></a>

```go
func ResetBrowserTabTitle()
```

##### `ResetContactButtonText` <a name="ResetContactButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactButtonText"></a>

```go
func ResetContactButtonText()
```

##### `ResetContactLink` <a name="ResetContactLink" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactLink"></a>

```go
func ResetContactLink()
```

##### `ResetLoadingText` <a name="ResetLoadingText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoadingText"></a>

```go
func ResetLoadingText()
```

##### `ResetLoginButtonText` <a name="ResetLoginButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginButtonText"></a>

```go
func ResetLoginButtonText()
```

##### `ResetLoginDescription` <a name="ResetLoginDescription" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginDescription"></a>

```go
func ResetLoginDescription()
```

##### `ResetLoginTitle` <a name="ResetLoginTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginTitle"></a>

```go
func ResetLoginTitle()
```

##### `ResetWelcomeText` <a name="ResetWelcomeText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetWelcomeText"></a>

```go
func ResetWelcomeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitleInput">BrowserTabTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonTextInput">ContactButtonTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLinkInput">ContactLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingTextInput">LoadingTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonTextInput">LoginButtonTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescriptionInput">LoginDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitleInput">LoginTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeTextInput">WelcomeTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitle">BrowserTabTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonText">ContactButtonText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLink">ContactLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingText">LoadingText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonText">LoginButtonText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescription">LoginDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitle">LoginTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeText">WelcomeText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BrowserTabTitleInput`<sup>Optional</sup> <a name="BrowserTabTitleInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitleInput"></a>

```go
func BrowserTabTitleInput() *string
```

- *Type:* *string

---

##### `ContactButtonTextInput`<sup>Optional</sup> <a name="ContactButtonTextInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonTextInput"></a>

```go
func ContactButtonTextInput() *string
```

- *Type:* *string

---

##### `ContactLinkInput`<sup>Optional</sup> <a name="ContactLinkInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLinkInput"></a>

```go
func ContactLinkInput() *string
```

- *Type:* *string

---

##### `LoadingTextInput`<sup>Optional</sup> <a name="LoadingTextInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingTextInput"></a>

```go
func LoadingTextInput() *string
```

- *Type:* *string

---

##### `LoginButtonTextInput`<sup>Optional</sup> <a name="LoginButtonTextInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonTextInput"></a>

```go
func LoginButtonTextInput() *string
```

- *Type:* *string

---

##### `LoginDescriptionInput`<sup>Optional</sup> <a name="LoginDescriptionInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescriptionInput"></a>

```go
func LoginDescriptionInput() *string
```

- *Type:* *string

---

##### `LoginTitleInput`<sup>Optional</sup> <a name="LoginTitleInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitleInput"></a>

```go
func LoginTitleInput() *string
```

- *Type:* *string

---

##### `WelcomeTextInput`<sup>Optional</sup> <a name="WelcomeTextInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeTextInput"></a>

```go
func WelcomeTextInput() *string
```

- *Type:* *string

---

##### `BrowserTabTitle`<sup>Required</sup> <a name="BrowserTabTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitle"></a>

```go
func BrowserTabTitle() *string
```

- *Type:* *string

---

##### `ContactButtonText`<sup>Required</sup> <a name="ContactButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonText"></a>

```go
func ContactButtonText() *string
```

- *Type:* *string

---

##### `ContactLink`<sup>Required</sup> <a name="ContactLink" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLink"></a>

```go
func ContactLink() *string
```

- *Type:* *string

---

##### `LoadingText`<sup>Required</sup> <a name="LoadingText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingText"></a>

```go
func LoadingText() *string
```

- *Type:* *string

---

##### `LoginButtonText`<sup>Required</sup> <a name="LoginButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonText"></a>

```go
func LoginButtonText() *string
```

- *Type:* *string

---

##### `LoginDescription`<sup>Required</sup> <a name="LoginDescription" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescription"></a>

```go
func LoginDescription() *string
```

- *Type:* *string

---

##### `LoginTitle`<sup>Required</sup> <a name="LoginTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitle"></a>

```go
func LoginTitle() *string
```

- *Type:* *string

---

##### `WelcomeText`<sup>Required</sup> <a name="WelcomeText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeText"></a>

```go
func WelcomeText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.lastUploadTimestamp">LastUploadTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `LastUploadTimestamp`<sup>Required</sup> <a name="LastUploadTimestamp" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.lastUploadTimestamp"></a>

```go
func LastUploadTimestamp() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata</a>

---


### WorkspaceswebUserSettingsBrandingConfigurationOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsBrandingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceswebUserSettingsBrandingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.putLocalizedStrings">PutLocalizedStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetColorTheme">ResetColorTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetFavicon">ResetFavicon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLocalizedStrings">ResetLocalizedStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetTermsOfService">ResetTermsOfService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetWallpaper">ResetWallpaper</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalizedStrings` <a name="PutLocalizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.putLocalizedStrings"></a>

```go
func PutLocalizedStrings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.putLocalizedStrings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetColorTheme` <a name="ResetColorTheme" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetColorTheme"></a>

```go
func ResetColorTheme()
```

##### `ResetFavicon` <a name="ResetFavicon" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetFavicon"></a>

```go
func ResetFavicon()
```

##### `ResetLocalizedStrings` <a name="ResetLocalizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLocalizedStrings"></a>

```go
func ResetLocalizedStrings()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetTermsOfService` <a name="ResetTermsOfService" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetTermsOfService"></a>

```go
func ResetTermsOfService()
```

##### `ResetWallpaper` <a name="ResetWallpaper" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetWallpaper"></a>

```go
func ResetWallpaper()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconMetadata">FaviconMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStrings">LocalizedStrings</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoMetadata">LogoMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperMetadata">WallpaperMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorThemeInput">ColorThemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconInput">FaviconInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStringsInput">LocalizedStringsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfServiceInput">TermsOfServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperInput">WallpaperInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorTheme">ColorTheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.favicon">Favicon</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfService">TermsOfService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaper">Wallpaper</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FaviconMetadata`<sup>Required</sup> <a name="FaviconMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconMetadata"></a>

```go
func FaviconMetadata() WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference</a>

---

##### `LocalizedStrings`<sup>Required</sup> <a name="LocalizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStrings"></a>

```go
func LocalizedStrings() WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap</a>

---

##### `LogoMetadata`<sup>Required</sup> <a name="LogoMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoMetadata"></a>

```go
func LogoMetadata() WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference</a>

---

##### `WallpaperMetadata`<sup>Required</sup> <a name="WallpaperMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperMetadata"></a>

```go
func WallpaperMetadata() WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference</a>

---

##### `ColorThemeInput`<sup>Optional</sup> <a name="ColorThemeInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorThemeInput"></a>

```go
func ColorThemeInput() *string
```

- *Type:* *string

---

##### `FaviconInput`<sup>Optional</sup> <a name="FaviconInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconInput"></a>

```go
func FaviconInput() *string
```

- *Type:* *string

---

##### `LocalizedStringsInput`<sup>Optional</sup> <a name="LocalizedStringsInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStringsInput"></a>

```go
func LocalizedStringsInput() interface{}
```

- *Type:* interface{}

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `TermsOfServiceInput`<sup>Optional</sup> <a name="TermsOfServiceInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfServiceInput"></a>

```go
func TermsOfServiceInput() *string
```

- *Type:* *string

---

##### `WallpaperInput`<sup>Optional</sup> <a name="WallpaperInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperInput"></a>

```go
func WallpaperInput() *string
```

- *Type:* *string

---

##### `ColorTheme`<sup>Required</sup> <a name="ColorTheme" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorTheme"></a>

```go
func ColorTheme() *string
```

- *Type:* *string

---

##### `Favicon`<sup>Required</sup> <a name="Favicon" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.favicon"></a>

```go
func Favicon() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `TermsOfService`<sup>Required</sup> <a name="TermsOfService" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfService"></a>

```go
func TermsOfService() *string
```

- *Type:* *string

---

##### `Wallpaper`<sup>Required</sup> <a name="Wallpaper" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaper"></a>

```go
func Wallpaper() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.lastUploadTimestamp">LastUploadTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `LastUploadTimestamp`<sup>Required</sup> <a name="LastUploadTimestamp" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.lastUploadTimestamp"></a>

```go
func LastUploadTimestamp() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata</a>

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get"></a>

```go
func Get(index *f64) WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get"></a>

```go
func Get(index *f64) WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist">PutAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist">PutBlocklist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetAllowlist">ResetAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetBlocklist">ResetBlocklist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowlist` <a name="PutAllowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist"></a>

```go
func PutAllowlist(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBlocklist` <a name="PutBlocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist"></a>

```go
func PutBlocklist(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowlist` <a name="ResetAllowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetAllowlist"></a>

```go
func ResetAllowlist()
```

##### `ResetBlocklist` <a name="ResetBlocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetBlocklist"></a>

```go
func ResetBlocklist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist">Allowlist</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist">Blocklist</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlistInput">AllowlistInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklistInput">BlocklistInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Allowlist`<sup>Required</sup> <a name="Allowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist"></a>

```go
func Allowlist() WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a>

---

##### `Blocklist`<sup>Required</sup> <a name="Blocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist"></a>

```go
func Blocklist() WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a>

---

##### `AllowlistInput`<sup>Optional</sup> <a name="AllowlistInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlistInput"></a>

```go
func AllowlistInput() interface{}
```

- *Type:* interface{}

---

##### `BlocklistInput`<sup>Optional</sup> <a name="BlocklistInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklistInput"></a>

```go
func BlocklistInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebUserSettingsTagsList <a name="WorkspaceswebUserSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspaceswebUserSettingsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.get"></a>

```go
func Get(index *f64) WorkspaceswebUserSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebUserSettingsTagsOutputReference <a name="WorkspaceswebUserSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspaceswebUserSettingsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebUserSettingsToolbarConfigurationOutputReference <a name="WorkspaceswebUserSettingsToolbarConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebusersettings"

workspaceswebusersettings.NewWorkspaceswebUserSettingsToolbarConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceswebUserSettingsToolbarConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetHiddenToolbarItems">ResetHiddenToolbarItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetMaxDisplayResolution">ResetMaxDisplayResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetToolbarType">ResetToolbarType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetVisualMode">ResetVisualMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHiddenToolbarItems` <a name="ResetHiddenToolbarItems" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetHiddenToolbarItems"></a>

```go
func ResetHiddenToolbarItems()
```

##### `ResetMaxDisplayResolution` <a name="ResetMaxDisplayResolution" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetMaxDisplayResolution"></a>

```go
func ResetMaxDisplayResolution()
```

##### `ResetToolbarType` <a name="ResetToolbarType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetToolbarType"></a>

```go
func ResetToolbarType()
```

##### `ResetVisualMode` <a name="ResetVisualMode" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetVisualMode"></a>

```go
func ResetVisualMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItemsInput">HiddenToolbarItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolutionInput">MaxDisplayResolutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarTypeInput">ToolbarTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualModeInput">VisualModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems">HiddenToolbarItems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution">MaxDisplayResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType">ToolbarType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode">VisualMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HiddenToolbarItemsInput`<sup>Optional</sup> <a name="HiddenToolbarItemsInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItemsInput"></a>

```go
func HiddenToolbarItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxDisplayResolutionInput`<sup>Optional</sup> <a name="MaxDisplayResolutionInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolutionInput"></a>

```go
func MaxDisplayResolutionInput() *string
```

- *Type:* *string

---

##### `ToolbarTypeInput`<sup>Optional</sup> <a name="ToolbarTypeInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarTypeInput"></a>

```go
func ToolbarTypeInput() *string
```

- *Type:* *string

---

##### `VisualModeInput`<sup>Optional</sup> <a name="VisualModeInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualModeInput"></a>

```go
func VisualModeInput() *string
```

- *Type:* *string

---

##### `HiddenToolbarItems`<sup>Required</sup> <a name="HiddenToolbarItems" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems"></a>

```go
func HiddenToolbarItems() *[]*string
```

- *Type:* *[]*string

---

##### `MaxDisplayResolution`<sup>Required</sup> <a name="MaxDisplayResolution" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution"></a>

```go
func MaxDisplayResolution() *string
```

- *Type:* *string

---

##### `ToolbarType`<sup>Required</sup> <a name="ToolbarType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType"></a>

```go
func ToolbarType() *string
```

- *Type:* *string

---

##### `VisualMode`<sup>Required</sup> <a name="VisualMode" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode"></a>

```go
func VisualMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



