# `rolesanywhereTrustAnchor` Submodule <a name="`rolesanywhereTrustAnchor` Submodule" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RolesanywhereTrustAnchor <a name="RolesanywhereTrustAnchor" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor awscc_rolesanywhere_trust_anchor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.NewRolesanywhereTrustAnchor(scope Construct, id *string, config RolesanywhereTrustAnchorConfig) RolesanywhereTrustAnchor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig">RolesanywhereTrustAnchorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig">RolesanywhereTrustAnchorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetNotificationSettings">ResetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putNotificationSettings"></a>

```go
func PutNotificationSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putNotificationSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putSource"></a>

```go
func PutSource(value RolesanywhereTrustAnchorSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetNotificationSettings"></a>

```go
func ResetNotificationSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RolesanywhereTrustAnchor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.RolesanywhereTrustAnchor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.RolesanywhereTrustAnchor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.RolesanywhereTrustAnchor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.RolesanywhereTrustAnchor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RolesanywhereTrustAnchor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RolesanywhereTrustAnchor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RolesanywhereTrustAnchor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RolesanywhereTrustAnchor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList">RolesanywhereTrustAnchorNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference">RolesanywhereTrustAnchorSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList">RolesanywhereTrustAnchorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.trustAnchorArn">TrustAnchorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.trustAnchorId">TrustAnchorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettings"></a>

```go
func NotificationSettings() RolesanywhereTrustAnchorNotificationSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList">RolesanywhereTrustAnchorNotificationSettingsList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.source"></a>

```go
func Source() RolesanywhereTrustAnchorSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference">RolesanywhereTrustAnchorSourceOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tags"></a>

```go
func Tags() RolesanywhereTrustAnchorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList">RolesanywhereTrustAnchorTagsList</a>

---

##### `TrustAnchorArn`<sup>Required</sup> <a name="TrustAnchorArn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.trustAnchorArn"></a>

```go
func TrustAnchorArn() *string
```

- *Type:* *string

---

##### `TrustAnchorId`<sup>Required</sup> <a name="TrustAnchorId" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.trustAnchorId"></a>

```go
func TrustAnchorId() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.notificationSettingsInput"></a>

```go
func NotificationSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RolesanywhereTrustAnchorConfig <a name="RolesanywhereTrustAnchorConfig" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

&rolesanywheretrustanchor.RolesanywhereTrustAnchorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Source: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource,
	Enabled: interface{},
	NotificationSettings: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#name RolesanywhereTrustAnchor#name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source RolesanywhereTrustAnchor#source}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.notificationSettings">NotificationSettings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#notification_settings RolesanywhereTrustAnchor#notification_settings}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#tags RolesanywhereTrustAnchor#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#name RolesanywhereTrustAnchor#name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.source"></a>

```go
Source RolesanywhereTrustAnchorSource
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource">RolesanywhereTrustAnchorSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source RolesanywhereTrustAnchor#source}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}.

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.notificationSettings"></a>

```go
NotificationSettings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#notification_settings RolesanywhereTrustAnchor#notification_settings}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#tags RolesanywhereTrustAnchor#tags}.

---

### RolesanywhereTrustAnchorNotificationSettings <a name="RolesanywhereTrustAnchorNotificationSettings" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

&rolesanywheretrustanchor.RolesanywhereTrustAnchorNotificationSettings {
	Channel: *string,
	Enabled: interface{},
	Event: *string,
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.channel">Channel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#channel RolesanywhereTrustAnchor#channel}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.event">Event</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#event RolesanywhereTrustAnchor#event}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#threshold RolesanywhereTrustAnchor#threshold}. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#channel RolesanywhereTrustAnchor#channel}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}.

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.event"></a>

```go
Event *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#event RolesanywhereTrustAnchor#event}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettings.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#threshold RolesanywhereTrustAnchor#threshold}.

---

### RolesanywhereTrustAnchorSource <a name="RolesanywhereTrustAnchorSource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

&rolesanywheretrustanchor.RolesanywhereTrustAnchorSource {
	SourceData: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData,
	SourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceData">SourceData</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source_data RolesanywhereTrustAnchor#source_data}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source_type RolesanywhereTrustAnchor#source_type}. |

---

##### `SourceData`<sup>Required</sup> <a name="SourceData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceData"></a>

```go
SourceData RolesanywhereTrustAnchorSourceSourceData
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source_data RolesanywhereTrustAnchor#source_data}.

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSource.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#source_type RolesanywhereTrustAnchor#source_type}.

---

### RolesanywhereTrustAnchorSourceSourceData <a name="RolesanywhereTrustAnchorSourceSourceData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

&rolesanywheretrustanchor.RolesanywhereTrustAnchorSourceSourceData {
	AcmPcaArn: *string,
	X509CertificateData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.acmPcaArn">AcmPcaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#acm_pca_arn RolesanywhereTrustAnchor#acm_pca_arn}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.x509CertificateData">X509CertificateData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#x509_certificate_data RolesanywhereTrustAnchor#x509_certificate_data}. |

---

##### `AcmPcaArn`<sup>Optional</sup> <a name="AcmPcaArn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.acmPcaArn"></a>

```go
AcmPcaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#acm_pca_arn RolesanywhereTrustAnchor#acm_pca_arn}.

---

##### `X509CertificateData`<sup>Optional</sup> <a name="X509CertificateData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData.property.x509CertificateData"></a>

```go
X509CertificateData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#x509_certificate_data RolesanywhereTrustAnchor#x509_certificate_data}.

---

### RolesanywhereTrustAnchorTags <a name="RolesanywhereTrustAnchorTags" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

&rolesanywheretrustanchor.RolesanywhereTrustAnchorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#key RolesanywhereTrustAnchor#key}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#value RolesanywhereTrustAnchor#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#key RolesanywhereTrustAnchor#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_trust_anchor#value RolesanywhereTrustAnchor#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RolesanywhereTrustAnchorNotificationSettingsList <a name="RolesanywhereTrustAnchorNotificationSettingsList" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.NewRolesanywhereTrustAnchorNotificationSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RolesanywhereTrustAnchorNotificationSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.get"></a>

```go
func Get(index *f64) RolesanywhereTrustAnchorNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RolesanywhereTrustAnchorNotificationSettingsOutputReference <a name="RolesanywhereTrustAnchorNotificationSettingsOutputReference" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.NewRolesanywhereTrustAnchorNotificationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RolesanywhereTrustAnchorNotificationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEvent` <a name="ResetEvent" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetEvent"></a>

```go
func ResetEvent()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.eventInput">EventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.event">Event</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.eventInput"></a>

```go
func EventInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.event"></a>

```go
func Event() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorNotificationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RolesanywhereTrustAnchorSourceOutputReference <a name="RolesanywhereTrustAnchorSourceOutputReference" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.NewRolesanywhereTrustAnchorSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RolesanywhereTrustAnchorSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.putSourceData">PutSourceData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceData` <a name="PutSourceData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.putSourceData"></a>

```go
func PutSourceData(value RolesanywhereTrustAnchorSourceSourceData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.putSourceData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceData">RolesanywhereTrustAnchorSourceSourceData</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceData">SourceData</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference">RolesanywhereTrustAnchorSourceSourceDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceDataInput">SourceDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceData`<sup>Required</sup> <a name="SourceData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceData"></a>

```go
func SourceData() RolesanywhereTrustAnchorSourceSourceDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference">RolesanywhereTrustAnchorSourceSourceDataOutputReference</a>

---

##### `SourceDataInput`<sup>Optional</sup> <a name="SourceDataInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceDataInput"></a>

```go
func SourceDataInput() interface{}
```

- *Type:* interface{}

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RolesanywhereTrustAnchorSourceSourceDataOutputReference <a name="RolesanywhereTrustAnchorSourceSourceDataOutputReference" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.NewRolesanywhereTrustAnchorSourceSourceDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RolesanywhereTrustAnchorSourceSourceDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetAcmPcaArn">ResetAcmPcaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetX509CertificateData">ResetX509CertificateData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcmPcaArn` <a name="ResetAcmPcaArn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetAcmPcaArn"></a>

```go
func ResetAcmPcaArn()
```

##### `ResetX509CertificateData` <a name="ResetX509CertificateData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.resetX509CertificateData"></a>

```go
func ResetX509CertificateData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArnInput">AcmPcaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateDataInput">X509CertificateDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArn">AcmPcaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateData">X509CertificateData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcmPcaArnInput`<sup>Optional</sup> <a name="AcmPcaArnInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArnInput"></a>

```go
func AcmPcaArnInput() *string
```

- *Type:* *string

---

##### `X509CertificateDataInput`<sup>Optional</sup> <a name="X509CertificateDataInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateDataInput"></a>

```go
func X509CertificateDataInput() *string
```

- *Type:* *string

---

##### `AcmPcaArn`<sup>Required</sup> <a name="AcmPcaArn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArn"></a>

```go
func AcmPcaArn() *string
```

- *Type:* *string

---

##### `X509CertificateData`<sup>Required</sup> <a name="X509CertificateData" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateData"></a>

```go
func X509CertificateData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorSourceSourceDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RolesanywhereTrustAnchorTagsList <a name="RolesanywhereTrustAnchorTagsList" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.NewRolesanywhereTrustAnchorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RolesanywhereTrustAnchorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.get"></a>

```go
func Get(index *f64) RolesanywhereTrustAnchorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RolesanywhereTrustAnchorTagsOutputReference <a name="RolesanywhereTrustAnchorTagsOutputReference" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rolesanywheretrustanchor"

rolesanywheretrustanchor.NewRolesanywhereTrustAnchorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RolesanywhereTrustAnchorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rolesanywhereTrustAnchor.RolesanywhereTrustAnchorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



