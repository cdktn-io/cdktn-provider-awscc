# `identitystoreUser` Submodule <a name="`identitystoreUser` Submodule" id="@cdktn/provider-awscc.identitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreUser <a name="IdentitystoreUser" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user awscc_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUser(scope Construct, id *string, config IdentitystoreUserConfig) IdentitystoreUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig">IdentitystoreUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig">IdentitystoreUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses">PutAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails">PutEmails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers">PutPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos">PutPhotos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetAddresses">ResetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetBirthdate">ResetBirthdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetEmails">ResetEmails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetLocale">ResetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetNickName">ResetNickName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhoneNumbers">ResetPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhotos">ResetPhotos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPreferredLanguage">ResetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetProfileUrl">ResetProfileUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserType">ResetUserType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetWebsite">ResetWebsite</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAddresses` <a name="PutAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses"></a>

```go
func PutAddresses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEmails` <a name="PutEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails"></a>

```go
func PutEmails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutName` <a name="PutName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName"></a>

```go
func PutName(value IdentitystoreUserName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `PutPhoneNumbers` <a name="PutPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers"></a>

```go
func PutPhoneNumbers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPhotos` <a name="PutPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos"></a>

```go
func PutPhotos(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRoles` <a name="PutRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles"></a>

```go
func PutRoles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddresses` <a name="ResetAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetAddresses"></a>

```go
func ResetAddresses()
```

##### `ResetBirthdate` <a name="ResetBirthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetBirthdate"></a>

```go
func ResetBirthdate()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmails` <a name="ResetEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetEmails"></a>

```go
func ResetEmails()
```

##### `ResetLocale` <a name="ResetLocale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetLocale"></a>

```go
func ResetLocale()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetName"></a>

```go
func ResetName()
```

##### `ResetNickName` <a name="ResetNickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetNickName"></a>

```go
func ResetNickName()
```

##### `ResetPhoneNumbers` <a name="ResetPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhoneNumbers"></a>

```go
func ResetPhoneNumbers()
```

##### `ResetPhotos` <a name="ResetPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhotos"></a>

```go
func ResetPhotos()
```

##### `ResetPreferredLanguage` <a name="ResetPreferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPreferredLanguage"></a>

```go
func ResetPreferredLanguage()
```

##### `ResetProfileUrl` <a name="ResetProfileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetProfileUrl"></a>

```go
func ResetProfileUrl()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetRoles"></a>

```go
func ResetRoles()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserName"></a>

```go
func ResetUserName()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserType"></a>

```go
func ResetUserType()
```

##### `ResetWebsite` <a name="ResetWebsite" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetWebsite"></a>

```go
func ResetWebsite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IdentitystoreUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.IdentitystoreUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.IdentitystoreUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.IdentitystoreUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.IdentitystoreUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IdentitystoreUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentitystoreUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentitystoreUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IdentitystoreUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addresses">Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList">IdentitystoreUserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emails">Emails</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList">IdentitystoreUserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.name">Name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbers">PhoneNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList">IdentitystoreUserPhoneNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photos">Photos</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList">IdentitystoreUserPhotosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.roles">Roles</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList">IdentitystoreUserRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userStatus">UserStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addressesInput">AddressesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdateInput">BirthdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emailsInput">EmailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput">IdentityStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.localeInput">LocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nameInput">NameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickNameInput">NickNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput">PhoneNumbersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photosInput">PhotosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput">PreferredLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrlInput">ProfileUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.rolesInput">RolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userTypeInput">UserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.websiteInput">WebsiteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdate">Birthdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickName">NickName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrl">ProfileUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.website">Website</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addresses"></a>

```go
func Addresses() IdentitystoreUserAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList">IdentitystoreUserAddressesList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emails"></a>

```go
func Emails() IdentitystoreUserEmailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList">IdentitystoreUserEmailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.name"></a>

```go
func Name() IdentitystoreUserNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a>

---

##### `PhoneNumbers`<sup>Required</sup> <a name="PhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbers"></a>

```go
func PhoneNumbers() IdentitystoreUserPhoneNumbersList
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList">IdentitystoreUserPhoneNumbersList</a>

---

##### `Photos`<sup>Required</sup> <a name="Photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photos"></a>

```go
func Photos() IdentitystoreUserPhotosList
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList">IdentitystoreUserPhotosList</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.roles"></a>

```go
func Roles() IdentitystoreUserRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList">IdentitystoreUserRolesList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `UserStatus`<sup>Required</sup> <a name="UserStatus" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userStatus"></a>

```go
func UserStatus() *string
```

- *Type:* *string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addressesInput"></a>

```go
func AddressesInput() interface{}
```

- *Type:* interface{}

---

##### `BirthdateInput`<sup>Optional</sup> <a name="BirthdateInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdateInput"></a>

```go
func BirthdateInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailsInput`<sup>Optional</sup> <a name="EmailsInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emailsInput"></a>

```go
func EmailsInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityStoreIdInput`<sup>Optional</sup> <a name="IdentityStoreIdInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput"></a>

```go
func IdentityStoreIdInput() *string
```

- *Type:* *string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.localeInput"></a>

```go
func LocaleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nameInput"></a>

```go
func NameInput() interface{}
```

- *Type:* interface{}

---

##### `NickNameInput`<sup>Optional</sup> <a name="NickNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickNameInput"></a>

```go
func NickNameInput() *string
```

- *Type:* *string

---

##### `PhoneNumbersInput`<sup>Optional</sup> <a name="PhoneNumbersInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput"></a>

```go
func PhoneNumbersInput() interface{}
```

- *Type:* interface{}

---

##### `PhotosInput`<sup>Optional</sup> <a name="PhotosInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photosInput"></a>

```go
func PhotosInput() interface{}
```

- *Type:* interface{}

---

##### `PreferredLanguageInput`<sup>Optional</sup> <a name="PreferredLanguageInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput"></a>

```go
func PreferredLanguageInput() *string
```

- *Type:* *string

---

##### `ProfileUrlInput`<sup>Optional</sup> <a name="ProfileUrlInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrlInput"></a>

```go
func ProfileUrlInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.rolesInput"></a>

```go
func RolesInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userTypeInput"></a>

```go
func UserTypeInput() *string
```

- *Type:* *string

---

##### `WebsiteInput`<sup>Optional</sup> <a name="WebsiteInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.websiteInput"></a>

```go
func WebsiteInput() *string
```

- *Type:* *string

---

##### `Birthdate`<sup>Required</sup> <a name="Birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdate"></a>

```go
func Birthdate() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreId"></a>

```go
func IdentityStoreId() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `NickName`<sup>Required</sup> <a name="NickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickName"></a>

```go
func NickName() *string
```

- *Type:* *string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrl"></a>

```go
func ProfileUrl() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

##### `Website`<sup>Required</sup> <a name="Website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.website"></a>

```go
func Website() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreUserAddresses <a name="IdentitystoreUserAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

&identitystoreuser.IdentitystoreUserAddresses {
	Country: *string,
	Formatted: *string,
	Locality: *string,
	PostalCode: *string,
	Primary: interface{},
	Region: *string,
	StreetAddress: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.country">Country</a></code> | <code>*string</code> | The country of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.formatted">Formatted</a></code> | <code>*string</code> | A formatted version of the address for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.locality">Locality</a></code> | <code>*string</code> | A string of the address locality. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.postalCode">PostalCode</a></code> | <code>*string</code> | The postal code of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.primary">Primary</a></code> | <code>interface{}</code> | Whether this is the primary address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.region">Region</a></code> | <code>*string</code> | The region of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | The street of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.type">Type</a></code> | <code>*string</code> | The type of address. |

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.country"></a>

```go
Country *string
```

- *Type:* *string

The country of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#country IdentitystoreUser#country}

---

##### `Formatted`<sup>Optional</sup> <a name="Formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.formatted"></a>

```go
Formatted *string
```

- *Type:* *string

A formatted version of the address for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

A string of the address locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locality IdentitystoreUser#locality}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

The postal code of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#postal_code IdentitystoreUser#postal_code}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Whether this is the primary address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#region IdentitystoreUser#region}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress"></a>

```go
StreetAddress *string
```

- *Type:* *string

The street of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#street_address IdentitystoreUser#street_address}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

### IdentitystoreUserConfig <a name="IdentitystoreUserConfig" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

&identitystoreuser.IdentitystoreUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IdentityStoreId: *string,
	Addresses: interface{},
	Birthdate: *string,
	DisplayName: *string,
	Emails: interface{},
	Locale: *string,
	Name: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.identitystoreUser.IdentitystoreUserName,
	NickName: *string,
	PhoneNumbers: interface{},
	Photos: interface{},
	PreferredLanguage: *string,
	ProfileUrl: *string,
	Roles: interface{},
	Timezone: *string,
	Title: *string,
	UserName: *string,
	UserType: *string,
	Website: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | The globally unique identifier for the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.addresses">Addresses</a></code> | <code>interface{}</code> | A list of addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.birthdate">Birthdate</a></code> | <code>*string</code> | The user's birthdate in YYYY-MM-DD format. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A string containing the name of the user for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.emails">Emails</a></code> | <code>interface{}</code> | A list of email addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.locale">Locale</a></code> | <code>*string</code> | The geographical region or location of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.name">Name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | The name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.nickName">NickName</a></code> | <code>*string</code> | An alternate name for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers">PhoneNumbers</a></code> | <code>interface{}</code> | A list of phone numbers associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.photos">Photos</a></code> | <code>interface{}</code> | A list of photos associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | The preferred language of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.profileUrl">ProfileUrl</a></code> | <code>*string</code> | A URL associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.roles">Roles</a></code> | <code>interface{}</code> | A list of roles associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.timezone">Timezone</a></code> | <code>*string</code> | The time zone for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.title">Title</a></code> | <code>*string</code> | The title of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userName">UserName</a></code> | <code>*string</code> | A unique string used to identify the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userType">UserType</a></code> | <code>*string</code> | A string indicating the type of user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.website">Website</a></code> | <code>*string</code> | The user's personal website or blog URL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId"></a>

```go
IdentityStoreId *string
```

- *Type:* *string

The globally unique identifier for the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}

---

##### `Addresses`<sup>Optional</sup> <a name="Addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.addresses"></a>

```go
Addresses interface{}
```

- *Type:* interface{}

A list of addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `Birthdate`<sup>Optional</sup> <a name="Birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.birthdate"></a>

```go
Birthdate *string
```

- *Type:* *string

The user's birthdate in YYYY-MM-DD format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#birthdate IdentitystoreUser#birthdate}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A string containing the name of the user for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display_name IdentitystoreUser#display_name}

---

##### `Emails`<sup>Optional</sup> <a name="Emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.emails"></a>

```go
Emails interface{}
```

- *Type:* interface{}

A list of email addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#emails IdentitystoreUser#emails}

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.locale"></a>

```go
Locale *string
```

- *Type:* *string

The geographical region or location of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locale IdentitystoreUser#locale}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.name"></a>

```go
Name IdentitystoreUserName
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#name IdentitystoreUser#name}

---

##### `NickName`<sup>Optional</sup> <a name="NickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.nickName"></a>

```go
NickName *string
```

- *Type:* *string

An alternate name for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#nick_name IdentitystoreUser#nick_name}

---

##### `PhoneNumbers`<sup>Optional</sup> <a name="PhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers"></a>

```go
PhoneNumbers interface{}
```

- *Type:* interface{}

A list of phone numbers associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `Photos`<sup>Optional</sup> <a name="Photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.photos"></a>

```go
Photos interface{}
```

- *Type:* interface{}

A list of photos associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#photos IdentitystoreUser#photos}

---

##### `PreferredLanguage`<sup>Optional</sup> <a name="PreferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage"></a>

```go
PreferredLanguage *string
```

- *Type:* *string

The preferred language of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#preferred_language IdentitystoreUser#preferred_language}

---

##### `ProfileUrl`<sup>Optional</sup> <a name="ProfileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.profileUrl"></a>

```go
ProfileUrl *string
```

- *Type:* *string

A URL associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#profile_url IdentitystoreUser#profile_url}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.roles"></a>

```go
Roles interface{}
```

- *Type:* interface{}

A list of roles associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#roles IdentitystoreUser#roles}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

The time zone for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#timezone IdentitystoreUser#timezone}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#title IdentitystoreUser#title}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

A unique string used to identify the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_name IdentitystoreUser#user_name}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userType"></a>

```go
UserType *string
```

- *Type:* *string

A string indicating the type of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_type IdentitystoreUser#user_type}

---

##### `Website`<sup>Optional</sup> <a name="Website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.website"></a>

```go
Website *string
```

- *Type:* *string

The user's personal website or blog URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#website IdentitystoreUser#website}

---

### IdentitystoreUserEmails <a name="IdentitystoreUserEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

&identitystoreuser.IdentitystoreUserEmails {
	Primary: interface{},
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.primary">Primary</a></code> | <code>interface{}</code> | Whether this is the primary email address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.type">Type</a></code> | <code>*string</code> | The type of email address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.value">Value</a></code> | <code>*string</code> | The email address. |

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Whether this is the primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.value"></a>

```go
Value *string
```

- *Type:* *string

The email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserName <a name="IdentitystoreUserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

&identitystoreuser.IdentitystoreUserName {
	FamilyName: *string,
	Formatted: *string,
	GivenName: *string,
	HonorificPrefix: *string,
	HonorificSuffix: *string,
	MiddleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.familyName">FamilyName</a></code> | <code>*string</code> | The family name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.formatted">Formatted</a></code> | <code>*string</code> | A string containing a formatted version of the name for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.givenName">GivenName</a></code> | <code>*string</code> | The given name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificPrefix">HonorificPrefix</a></code> | <code>*string</code> | The honorific prefix of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificSuffix">HonorificSuffix</a></code> | <code>*string</code> | The honorific suffix of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.middleName">MiddleName</a></code> | <code>*string</code> | The middle name of the user. |

---

##### `FamilyName`<sup>Optional</sup> <a name="FamilyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.familyName"></a>

```go
FamilyName *string
```

- *Type:* *string

The family name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#family_name IdentitystoreUser#family_name}

---

##### `Formatted`<sup>Optional</sup> <a name="Formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.formatted"></a>

```go
Formatted *string
```

- *Type:* *string

A string containing a formatted version of the name for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.givenName"></a>

```go
GivenName *string
```

- *Type:* *string

The given name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#given_name IdentitystoreUser#given_name}

---

##### `HonorificPrefix`<sup>Optional</sup> <a name="HonorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificPrefix"></a>

```go
HonorificPrefix *string
```

- *Type:* *string

The honorific prefix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}

---

##### `HonorificSuffix`<sup>Optional</sup> <a name="HonorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificSuffix"></a>

```go
HonorificSuffix *string
```

- *Type:* *string

The honorific suffix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.middleName"></a>

```go
MiddleName *string
```

- *Type:* *string

The middle name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#middle_name IdentitystoreUser#middle_name}

---

### IdentitystoreUserPhoneNumbers <a name="IdentitystoreUserPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

&identitystoreuser.IdentitystoreUserPhoneNumbers {
	Primary: interface{},
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary">Primary</a></code> | <code>interface{}</code> | Whether this is the primary phone number. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type">Type</a></code> | <code>*string</code> | The type of phone number. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value">Value</a></code> | <code>*string</code> | The phone number. |

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Whether this is the primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value"></a>

```go
Value *string
```

- *Type:* *string

The phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserPhotos <a name="IdentitystoreUserPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

&identitystoreuser.IdentitystoreUserPhotos {
	Display: *string,
	Primary: interface{},
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.display">Display</a></code> | <code>*string</code> | A display name for the photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.primary">Primary</a></code> | <code>interface{}</code> | Whether this is the primary photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.type">Type</a></code> | <code>*string</code> | The type of photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.value">Value</a></code> | <code>*string</code> | The photo data or URL. |

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.display"></a>

```go
Display *string
```

- *Type:* *string

A display name for the photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display IdentitystoreUser#display}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Whether this is the primary photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.value"></a>

```go
Value *string
```

- *Type:* *string

The photo data or URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserRoles <a name="IdentitystoreUserRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

&identitystoreuser.IdentitystoreUserRoles {
	Primary: interface{},
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.primary">Primary</a></code> | <code>interface{}</code> | Whether this is the primary role. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.type">Type</a></code> | <code>*string</code> | The type of role. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.value">Value</a></code> | <code>*string</code> | The role name. |

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Whether this is the primary role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.value"></a>

```go
Value *string
```

- *Type:* *string

The role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreUserAddressesList <a name="IdentitystoreUserAddressesList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentitystoreUserAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get"></a>

```go
func Get(index *f64) IdentitystoreUserAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentitystoreUserAddressesOutputReference <a name="IdentitystoreUserAddressesOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentitystoreUserAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted">ResetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetFormatted` <a name="ResetFormatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted"></a>

```go
func ResetFormatted()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary"></a>

```go
func ResetPrimary()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress"></a>

```go
func ResetStreetAddress()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput">FormattedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput">StreetAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted">Formatted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `FormattedInput`<sup>Optional</sup> <a name="FormattedInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput"></a>

```go
func FormattedInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput"></a>

```go
func StreetAddressInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Formatted`<sup>Required</sup> <a name="Formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted"></a>

```go
func Formatted() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```go
func StreetAddress() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentitystoreUserEmailsList <a name="IdentitystoreUserEmailsList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserEmailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentitystoreUserEmailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get"></a>

```go
func Get(index *f64) IdentitystoreUserEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentitystoreUserEmailsOutputReference <a name="IdentitystoreUserEmailsOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserEmailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentitystoreUserEmailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary"></a>

```go
func ResetPrimary()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentitystoreUserNameOutputReference <a name="IdentitystoreUserNameOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentitystoreUserNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFamilyName">ResetFamilyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted">ResetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix">ResetHonorificPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix">ResetHonorificSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName">ResetMiddleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFamilyName` <a name="ResetFamilyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFamilyName"></a>

```go
func ResetFamilyName()
```

##### `ResetFormatted` <a name="ResetFormatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted"></a>

```go
func ResetFormatted()
```

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetGivenName"></a>

```go
func ResetGivenName()
```

##### `ResetHonorificPrefix` <a name="ResetHonorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix"></a>

```go
func ResetHonorificPrefix()
```

##### `ResetHonorificSuffix` <a name="ResetHonorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix"></a>

```go
func ResetHonorificSuffix()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName"></a>

```go
func ResetMiddleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput">FamilyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput">FormattedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput">GivenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput">HonorificPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput">HonorificSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput">MiddleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName">FamilyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted">Formatted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix">HonorificPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix">HonorificSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilyNameInput`<sup>Optional</sup> <a name="FamilyNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput"></a>

```go
func FamilyNameInput() *string
```

- *Type:* *string

---

##### `FormattedInput`<sup>Optional</sup> <a name="FormattedInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput"></a>

```go
func FormattedInput() *string
```

- *Type:* *string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput"></a>

```go
func GivenNameInput() *string
```

- *Type:* *string

---

##### `HonorificPrefixInput`<sup>Optional</sup> <a name="HonorificPrefixInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput"></a>

```go
func HonorificPrefixInput() *string
```

- *Type:* *string

---

##### `HonorificSuffixInput`<sup>Optional</sup> <a name="HonorificSuffixInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput"></a>

```go
func HonorificSuffixInput() *string
```

- *Type:* *string

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput"></a>

```go
func MiddleNameInput() *string
```

- *Type:* *string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName"></a>

```go
func FamilyName() *string
```

- *Type:* *string

---

##### `Formatted`<sup>Required</sup> <a name="Formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted"></a>

```go
func Formatted() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `HonorificPrefix`<sup>Required</sup> <a name="HonorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```go
func HonorificPrefix() *string
```

- *Type:* *string

---

##### `HonorificSuffix`<sup>Required</sup> <a name="HonorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```go
func HonorificSuffix() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentitystoreUserPhoneNumbersList <a name="IdentitystoreUserPhoneNumbersList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserPhoneNumbersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentitystoreUserPhoneNumbersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get"></a>

```go
func Get(index *f64) IdentitystoreUserPhoneNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentitystoreUserPhoneNumbersOutputReference <a name="IdentitystoreUserPhoneNumbersOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserPhoneNumbersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentitystoreUserPhoneNumbersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary"></a>

```go
func ResetPrimary()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentitystoreUserPhotosList <a name="IdentitystoreUserPhotosList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserPhotosList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentitystoreUserPhotosList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get"></a>

```go
func Get(index *f64) IdentitystoreUserPhotosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentitystoreUserPhotosOutputReference <a name="IdentitystoreUserPhotosOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserPhotosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentitystoreUserPhotosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetDisplay"></a>

```go
func ResetDisplay()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetPrimary"></a>

```go
func ResetPrimary()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.displayInput">DisplayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.displayInput"></a>

```go
func DisplayInput() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentitystoreUserRolesList <a name="IdentitystoreUserRolesList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentitystoreUserRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get"></a>

```go
func Get(index *f64) IdentitystoreUserRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentitystoreUserRolesOutputReference <a name="IdentitystoreUserRolesOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/identitystoreuser"

identitystoreuser.NewIdentitystoreUserRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentitystoreUserRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetPrimary"></a>

```go
func ResetPrimary()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



