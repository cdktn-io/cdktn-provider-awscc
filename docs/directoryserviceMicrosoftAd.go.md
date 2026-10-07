# `directoryserviceMicrosoftAd` Submodule <a name="`directoryserviceMicrosoftAd` Submodule" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryserviceMicrosoftAd <a name="DirectoryserviceMicrosoftAd" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad awscc_directoryservice_microsoft_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directoryservicemicrosoftad"

directoryservicemicrosoftad.NewDirectoryserviceMicrosoftAd(scope Construct, id *string, config DirectoryserviceMicrosoftAdConfig) DirectoryserviceMicrosoftAd
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig">DirectoryserviceMicrosoftAdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig">DirectoryserviceMicrosoftAdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings">PutVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetCreateAlias">ResetCreateAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEnableSso">ResetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetShortName">ResetShortName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutVpcSettings` <a name="PutVpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings"></a>

```go
func PutVpcSettings(value DirectoryserviceMicrosoftAdVpcSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---

##### `ResetCreateAlias` <a name="ResetCreateAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetCreateAlias"></a>

```go
func ResetCreateAlias()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEdition"></a>

```go
func ResetEdition()
```

##### `ResetEnableSso` <a name="ResetEnableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEnableSso"></a>

```go
func ResetEnableSso()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetShortName` <a name="ResetShortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetShortName"></a>

```go
func ResetShortName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directoryservicemicrosoftad"

directoryservicemicrosoftad.DirectoryserviceMicrosoftAd_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directoryservicemicrosoftad"

directoryservicemicrosoftad.DirectoryserviceMicrosoftAd_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directoryservicemicrosoftad"

directoryservicemicrosoftad.DirectoryserviceMicrosoftAd_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directoryservicemicrosoftad"

directoryservicemicrosoftad.DirectoryserviceMicrosoftAd_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DirectoryserviceMicrosoftAd to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DirectoryserviceMicrosoftAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryserviceMicrosoftAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference">DirectoryserviceMicrosoftAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAliasInput">CreateAliasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSsoInput">EnableSsoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortNameInput">ShortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettingsInput">VpcSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAlias">CreateAlias</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSso">EnableSso</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dnsIpAddresses"></a>

```go
func DnsIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettings"></a>

```go
func VpcSettings() DirectoryserviceMicrosoftAdVpcSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference">DirectoryserviceMicrosoftAdVpcSettingsOutputReference</a>

---

##### `CreateAliasInput`<sup>Optional</sup> <a name="CreateAliasInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAliasInput"></a>

```go
func CreateAliasInput() interface{}
```

- *Type:* interface{}

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `EnableSsoInput`<sup>Optional</sup> <a name="EnableSsoInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSsoInput"></a>

```go
func EnableSsoInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ShortNameInput`<sup>Optional</sup> <a name="ShortNameInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortNameInput"></a>

```go
func ShortNameInput() *string
```

- *Type:* *string

---

##### `VpcSettingsInput`<sup>Optional</sup> <a name="VpcSettingsInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettingsInput"></a>

```go
func VpcSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAlias"></a>

```go
func CreateAlias() interface{}
```

- *Type:* interface{}

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `EnableSso`<sup>Required</sup> <a name="EnableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSso"></a>

```go
func EnableSso() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryserviceMicrosoftAdConfig <a name="DirectoryserviceMicrosoftAdConfig" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directoryservicemicrosoftad"

&directoryservicemicrosoftad.DirectoryserviceMicrosoftAdConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	VpcSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings,
	CreateAlias: interface{},
	Edition: *string,
	EnableSso: interface{},
	Password: *string,
	ShortName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.name">Name</a></code> | <code>*string</code> | The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | Specifies the VPC settings of the Microsoft AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.createAlias">CreateAlias</a></code> | <code>interface{}</code> | Specifies an alias for a directory and assigns the alias to the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.edition">Edition</a></code> | <code>*string</code> | AWS Managed Microsoft AD is available in two editions: Standard and Enterprise. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.enableSso">EnableSso</a></code> | <code>interface{}</code> | Whether to enable single sign-on for a Microsoft Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.password">Password</a></code> | <code>*string</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.shortName">ShortName</a></code> | <code>*string</code> | The NetBIOS name for your domain, such as CORP. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#name DirectoryserviceMicrosoftAd#name}

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.vpcSettings"></a>

```go
VpcSettings DirectoryserviceMicrosoftAdVpcSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

Specifies the VPC settings of the Microsoft AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_settings DirectoryserviceMicrosoftAd#vpc_settings}

---

##### `CreateAlias`<sup>Optional</sup> <a name="CreateAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.createAlias"></a>

```go
CreateAlias interface{}
```

- *Type:* interface{}

Specifies an alias for a directory and assigns the alias to the directory.

The alias is used to construct the access URL for the directory, such as http://<alias>.awsapps.com. By default, AWS CloudFormation does not create an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#create_alias DirectoryserviceMicrosoftAd#create_alias}

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

AWS Managed Microsoft AD is available in two editions: Standard and Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#edition DirectoryserviceMicrosoftAd#edition}

---

##### `EnableSso`<sup>Optional</sup> <a name="EnableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.enableSso"></a>

```go
EnableSso interface{}
```

- *Type:* interface{}

Whether to enable single sign-on for a Microsoft Active Directory in AWS.

Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#enable_sso DirectoryserviceMicrosoftAd#enable_sso}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password for the default administrative user named Admin.

If you need to change the password for the administrator account, see the ResetUserPassword API call in the AWS Directory Service API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#password DirectoryserviceMicrosoftAd#password}

---

##### `ShortName`<sup>Optional</sup> <a name="ShortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.shortName"></a>

```go
ShortName *string
```

- *Type:* *string

The NetBIOS name for your domain, such as CORP.

If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#short_name DirectoryserviceMicrosoftAd#short_name}

---

### DirectoryserviceMicrosoftAdVpcSettings <a name="DirectoryserviceMicrosoftAdVpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directoryservicemicrosoftad"

&directoryservicemicrosoftad.DirectoryserviceMicrosoftAdVpcSettings {
	SubnetIds: *[]*string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The identifiers of the subnets for the directory servers. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.vpcId">VpcId</a></code> | <code>*string</code> | The identifier of the VPC in which to create the directory. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#subnet_ids DirectoryserviceMicrosoftAd#subnet_ids}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_id DirectoryserviceMicrosoftAd#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryserviceMicrosoftAdVpcSettingsOutputReference <a name="DirectoryserviceMicrosoftAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directoryservicemicrosoftad"

directoryservicemicrosoftad.NewDirectoryserviceMicrosoftAdVpcSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DirectoryserviceMicrosoftAdVpcSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



