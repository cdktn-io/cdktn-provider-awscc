# `connectWorkspace` Submodule <a name="`connectWorkspace` Submodule" id="@cdktn/provider-awscc.connectWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectWorkspace <a name="ConnectWorkspace" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace awscc_connect_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspace(scope Construct, id *string, config ConnectWorkspaceConfig) ConnectWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig">ConnectWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig">ConnectWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia">PutMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages">PutPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme">PutTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetAssociations">ResetAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetMedia">ResetMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetPages">ResetPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTheme">ResetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMedia` <a name="PutMedia" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia"></a>

```go
func PutMedia(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPages` <a name="PutPages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages"></a>

```go
func PutPages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTheme` <a name="PutTheme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme"></a>

```go
func PutTheme(value ConnectWorkspaceTheme)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

---

##### `ResetAssociations` <a name="ResetAssociations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetAssociations"></a>

```go
func ResetAssociations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMedia` <a name="ResetMedia" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetMedia"></a>

```go
func ResetMedia()
```

##### `ResetPages` <a name="ResetPages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetPages"></a>

```go
func ResetPages()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTheme` <a name="ResetTheme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTheme"></a>

```go
func ResetTheme()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetVisibility"></a>

```go
func ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.ConnectWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.ConnectWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.ConnectWorkspace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.ConnectWorkspace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConnectWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConnectWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.media">Media</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList">ConnectWorkspaceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pages">Pages</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList">ConnectWorkspacePagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList">ConnectWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.theme">Theme</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference">ConnectWorkspaceThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associationsInput">AssociationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.mediaInput">MediaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pagesInput">PagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.themeInput">ThemeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associations">Associations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Media`<sup>Required</sup> <a name="Media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.media"></a>

```go
func Media() ConnectWorkspaceMediaList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList">ConnectWorkspaceMediaList</a>

---

##### `Pages`<sup>Required</sup> <a name="Pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pages"></a>

```go
func Pages() ConnectWorkspacePagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList">ConnectWorkspacePagesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tags"></a>

```go
func Tags() ConnectWorkspaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList">ConnectWorkspaceTagsList</a>

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.theme"></a>

```go
func Theme() ConnectWorkspaceThemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference">ConnectWorkspaceThemeOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `AssociationsInput`<sup>Optional</sup> <a name="AssociationsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associationsInput"></a>

```go
func AssociationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `MediaInput`<sup>Optional</sup> <a name="MediaInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.mediaInput"></a>

```go
func MediaInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PagesInput`<sup>Optional</sup> <a name="PagesInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pagesInput"></a>

```go
func PagesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ThemeInput`<sup>Optional</sup> <a name="ThemeInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.themeInput"></a>

```go
func ThemeInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `Associations`<sup>Required</sup> <a name="Associations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associations"></a>

```go
func Associations() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectWorkspaceConfig <a name="ConnectWorkspaceConfig" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceArn: *string,
	Name: *string,
	Associations: *[]*string,
	Description: *string,
	Media: interface{},
	Pages: interface{},
	Tags: interface{},
	Theme: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceTheme,
	Title: *string,
	Visibility: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.name">Name</a></code> | <code>*string</code> | The name of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.associations">Associations</a></code> | <code>*[]*string</code> | The resource ARNs associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.description">Description</a></code> | <code>*string</code> | The description of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.media">Media</a></code> | <code>interface{}</code> | The media items for the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.pages">Pages</a></code> | <code>interface{}</code> | The pages associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.theme">Theme</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | The theme configuration for the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.title">Title</a></code> | <code>*string</code> | The title of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.visibility">Visibility</a></code> | <code>*string</code> | The visibility of the workspace. Will always be set to ASSIGNED oninitial creation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#instance_arn ConnectWorkspace#instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#name ConnectWorkspace#name}

---

##### `Associations`<sup>Optional</sup> <a name="Associations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.associations"></a>

```go
Associations *[]*string
```

- *Type:* *[]*string

The resource ARNs associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#associations ConnectWorkspace#associations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#description ConnectWorkspace#description}

---

##### `Media`<sup>Optional</sup> <a name="Media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.media"></a>

```go
Media interface{}
```

- *Type:* interface{}

The media items for the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#media ConnectWorkspace#media}

---

##### `Pages`<sup>Optional</sup> <a name="Pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.pages"></a>

```go
Pages interface{}
```

- *Type:* interface{}

The pages associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#pages ConnectWorkspace#pages}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#tags ConnectWorkspace#tags}

---

##### `Theme`<sup>Optional</sup> <a name="Theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.theme"></a>

```go
Theme ConnectWorkspaceTheme
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

The theme configuration for the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#theme ConnectWorkspace#theme}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#title ConnectWorkspace#title}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

The visibility of the workspace. Will always be set to ASSIGNED oninitial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#visibility ConnectWorkspace#visibility}

---

### ConnectWorkspaceMedia <a name="ConnectWorkspaceMedia" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceMedia {
	Source: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#source ConnectWorkspace#source}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.type">Type</a></code> | <code>*string</code> | The type of media. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#source ConnectWorkspace#source}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of media.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#type ConnectWorkspace#type}

---

### ConnectWorkspacePages <a name="ConnectWorkspacePages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspacePages {
	InputData: *string,
	Page: *string,
	ResourceArn: *string,
	Slug: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.inputData">InputData</a></code> | <code>*string</code> | The input data for the page. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.page">Page</a></code> | <code>*string</code> | The page identifier. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the resource associated with the page. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.slug">Slug</a></code> | <code>*string</code> | The slug for the page. |

---

##### `InputData`<sup>Optional</sup> <a name="InputData" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.inputData"></a>

```go
InputData *string
```

- *Type:* *string

The input data for the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#input_data ConnectWorkspace#input_data}

---

##### `Page`<sup>Optional</sup> <a name="Page" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.page"></a>

```go
Page *string
```

- *Type:* *string

The page identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#page ConnectWorkspace#page}

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the resource associated with the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#resource_arn ConnectWorkspace#resource_arn}

---

##### `Slug`<sup>Optional</sup> <a name="Slug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.slug"></a>

```go
Slug *string
```

- *Type:* *string

The slug for the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#slug ConnectWorkspace#slug}

---

### ConnectWorkspaceTags <a name="ConnectWorkspaceTags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#key ConnectWorkspace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#value ConnectWorkspace#value}

---

### ConnectWorkspaceTheme <a name="ConnectWorkspaceTheme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceTheme {
	Dark: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeDark,
	Light: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeLight,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.dark">Dark</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#dark ConnectWorkspace#dark}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.light">Light</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#light ConnectWorkspace#light}. |

---

##### `Dark`<sup>Optional</sup> <a name="Dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.dark"></a>

```go
Dark ConnectWorkspaceThemeDark
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#dark ConnectWorkspace#dark}.

---

##### `Light`<sup>Optional</sup> <a name="Light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.light"></a>

```go
Light ConnectWorkspaceThemeLight
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#light ConnectWorkspace#light}.

---

### ConnectWorkspaceThemeDark <a name="ConnectWorkspaceThemeDark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeDark {
	Palette: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette,
	Typography: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.palette">Palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.typography">Typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}. |

---

##### `Palette`<sup>Optional</sup> <a name="Palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.palette"></a>

```go
Palette ConnectWorkspaceThemeDarkPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}.

---

##### `Typography`<sup>Optional</sup> <a name="Typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.typography"></a>

```go
Typography ConnectWorkspaceThemeDarkTypography
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}.

---

### ConnectWorkspaceThemeDarkPalette <a name="ConnectWorkspaceThemeDarkPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeDarkPalette {
	Canvas: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas,
	Header: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader,
	Navigation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation,
	Primary: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.canvas">Canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#header ConnectWorkspace#header}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.navigation">Navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}. |

---

##### `Canvas`<sup>Optional</sup> <a name="Canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.canvas"></a>

```go
Canvas ConnectWorkspaceThemeDarkPaletteCanvas
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.header"></a>

```go
Header ConnectWorkspaceThemeDarkPaletteHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#header ConnectWorkspace#header}.

---

##### `Navigation`<sup>Optional</sup> <a name="Navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.navigation"></a>

```go
Navigation ConnectWorkspaceThemeDarkPaletteNavigation
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.primary"></a>

```go
Primary ConnectWorkspaceThemeDarkPalettePrimary
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}.

---

### ConnectWorkspaceThemeDarkPaletteCanvas <a name="ConnectWorkspaceThemeDarkPaletteCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeDarkPaletteCanvas {
	ActiveBackground: *string,
	ContainerBackground: *string,
	PageBackground: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.activeBackground">ActiveBackground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.containerBackground">ContainerBackground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.pageBackground">PageBackground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}. |

---

##### `ActiveBackground`<sup>Optional</sup> <a name="ActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.activeBackground"></a>

```go
ActiveBackground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}.

---

##### `ContainerBackground`<sup>Optional</sup> <a name="ContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.containerBackground"></a>

```go
ContainerBackground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}.

---

##### `PageBackground`<sup>Optional</sup> <a name="PageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.pageBackground"></a>

```go
PageBackground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}.

---

### ConnectWorkspaceThemeDarkPaletteHeader <a name="ConnectWorkspaceThemeDarkPaletteHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeDarkPaletteHeader {
	Background: *string,
	InvertActionsColors: interface{},
	Text: *string,
	TextHover: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.background">Background</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.invertActionsColors">InvertActionsColors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.textHover">TextHover</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.background"></a>

```go
Background *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `InvertActionsColors`<sup>Optional</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.invertActionsColors"></a>

```go
InvertActionsColors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `TextHover`<sup>Optional</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.textHover"></a>

```go
TextHover *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeDarkPaletteNavigation <a name="ConnectWorkspaceThemeDarkPaletteNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeDarkPaletteNavigation {
	Background: *string,
	InvertActionsColors: interface{},
	Text: *string,
	TextActive: *string,
	TextBackgroundActive: *string,
	TextBackgroundHover: *string,
	TextHover: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.background">Background</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.invertActionsColors">InvertActionsColors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textActive">TextActive</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundActive">TextBackgroundActive</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundHover">TextBackgroundHover</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textHover">TextHover</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.background"></a>

```go
Background *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `InvertActionsColors`<sup>Optional</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.invertActionsColors"></a>

```go
InvertActionsColors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `TextActive`<sup>Optional</sup> <a name="TextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textActive"></a>

```go
TextActive *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}.

---

##### `TextBackgroundActive`<sup>Optional</sup> <a name="TextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundActive"></a>

```go
TextBackgroundActive *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}.

---

##### `TextBackgroundHover`<sup>Optional</sup> <a name="TextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundHover"></a>

```go
TextBackgroundHover *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}.

---

##### `TextHover`<sup>Optional</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textHover"></a>

```go
TextHover *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeDarkPalettePrimary <a name="ConnectWorkspaceThemeDarkPalettePrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeDarkPalettePrimary {
	Active: *string,
	ContrastText: *string,
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.active">Active</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active ConnectWorkspace#active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.contrastText">ContrastText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.active"></a>

```go
Active *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active ConnectWorkspace#active}.

---

##### `ContrastText`<sup>Optional</sup> <a name="ContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.contrastText"></a>

```go
ContrastText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeDarkTypography <a name="ConnectWorkspaceThemeDarkTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeDarkTypography {
	FontFamily: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.property.fontFamily">FontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}. |

---

##### `FontFamily`<sup>Optional</sup> <a name="FontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.property.fontFamily"></a>

```go
FontFamily ConnectWorkspaceThemeDarkTypographyFontFamily
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}.

---

### ConnectWorkspaceThemeDarkTypographyFontFamily <a name="ConnectWorkspaceThemeDarkTypographyFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeDarkTypographyFontFamily {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeLight <a name="ConnectWorkspaceThemeLight" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeLight {
	Palette: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette,
	Typography: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.palette">Palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.typography">Typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}. |

---

##### `Palette`<sup>Optional</sup> <a name="Palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.palette"></a>

```go
Palette ConnectWorkspaceThemeLightPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}.

---

##### `Typography`<sup>Optional</sup> <a name="Typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.typography"></a>

```go
Typography ConnectWorkspaceThemeLightTypography
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}.

---

### ConnectWorkspaceThemeLightPalette <a name="ConnectWorkspaceThemeLightPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeLightPalette {
	Canvas: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas,
	Header: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader,
	Navigation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation,
	Primary: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.canvas">Canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#header ConnectWorkspace#header}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.navigation">Navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}. |

---

##### `Canvas`<sup>Optional</sup> <a name="Canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.canvas"></a>

```go
Canvas ConnectWorkspaceThemeLightPaletteCanvas
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.header"></a>

```go
Header ConnectWorkspaceThemeLightPaletteHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#header ConnectWorkspace#header}.

---

##### `Navigation`<sup>Optional</sup> <a name="Navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.navigation"></a>

```go
Navigation ConnectWorkspaceThemeLightPaletteNavigation
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.primary"></a>

```go
Primary ConnectWorkspaceThemeLightPalettePrimary
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}.

---

### ConnectWorkspaceThemeLightPaletteCanvas <a name="ConnectWorkspaceThemeLightPaletteCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeLightPaletteCanvas {
	ActiveBackground: *string,
	ContainerBackground: *string,
	PageBackground: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.activeBackground">ActiveBackground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.containerBackground">ContainerBackground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.pageBackground">PageBackground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}. |

---

##### `ActiveBackground`<sup>Optional</sup> <a name="ActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.activeBackground"></a>

```go
ActiveBackground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}.

---

##### `ContainerBackground`<sup>Optional</sup> <a name="ContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.containerBackground"></a>

```go
ContainerBackground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}.

---

##### `PageBackground`<sup>Optional</sup> <a name="PageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.pageBackground"></a>

```go
PageBackground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}.

---

### ConnectWorkspaceThemeLightPaletteHeader <a name="ConnectWorkspaceThemeLightPaletteHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeLightPaletteHeader {
	Background: *string,
	InvertActionsColors: interface{},
	Text: *string,
	TextHover: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.background">Background</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.invertActionsColors">InvertActionsColors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.textHover">TextHover</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.background"></a>

```go
Background *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `InvertActionsColors`<sup>Optional</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.invertActionsColors"></a>

```go
InvertActionsColors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `TextHover`<sup>Optional</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.textHover"></a>

```go
TextHover *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeLightPaletteNavigation <a name="ConnectWorkspaceThemeLightPaletteNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeLightPaletteNavigation {
	Background: *string,
	InvertActionsColors: interface{},
	Text: *string,
	TextActive: *string,
	TextBackgroundActive: *string,
	TextBackgroundHover: *string,
	TextHover: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.background">Background</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.invertActionsColors">InvertActionsColors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textActive">TextActive</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundActive">TextBackgroundActive</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundHover">TextBackgroundHover</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textHover">TextHover</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `Background`<sup>Optional</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.background"></a>

```go
Background *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `InvertActionsColors`<sup>Optional</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.invertActionsColors"></a>

```go
InvertActionsColors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `TextActive`<sup>Optional</sup> <a name="TextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textActive"></a>

```go
TextActive *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}.

---

##### `TextBackgroundActive`<sup>Optional</sup> <a name="TextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundActive"></a>

```go
TextBackgroundActive *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}.

---

##### `TextBackgroundHover`<sup>Optional</sup> <a name="TextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundHover"></a>

```go
TextBackgroundHover *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}.

---

##### `TextHover`<sup>Optional</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textHover"></a>

```go
TextHover *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeLightPalettePrimary <a name="ConnectWorkspaceThemeLightPalettePrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeLightPalettePrimary {
	Active: *string,
	ContrastText: *string,
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.active">Active</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active ConnectWorkspace#active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.contrastText">ContrastText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.active"></a>

```go
Active *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#active ConnectWorkspace#active}.

---

##### `ContrastText`<sup>Optional</sup> <a name="ContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.contrastText"></a>

```go
ContrastText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeLightTypography <a name="ConnectWorkspaceThemeLightTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeLightTypography {
	FontFamily: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.property.fontFamily">FontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}. |

---

##### `FontFamily`<sup>Optional</sup> <a name="FontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.property.fontFamily"></a>

```go
FontFamily ConnectWorkspaceThemeLightTypographyFontFamily
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}.

---

### ConnectWorkspaceThemeLightTypographyFontFamily <a name="ConnectWorkspaceThemeLightTypographyFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

&connectworkspace.ConnectWorkspaceThemeLightTypographyFontFamily {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectWorkspaceMediaList <a name="ConnectWorkspaceMediaList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceMediaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectWorkspaceMediaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get"></a>

```go
func Get(index *f64) ConnectWorkspaceMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceMediaOutputReference <a name="ConnectWorkspaceMediaOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceMediaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectWorkspaceMediaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspacePagesList <a name="ConnectWorkspacePagesList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspacePagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectWorkspacePagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get"></a>

```go
func Get(index *f64) ConnectWorkspacePagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspacePagesOutputReference <a name="ConnectWorkspacePagesOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspacePagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectWorkspacePagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetInputData">ResetInputData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetPage">ResetPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetSlug">ResetSlug</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputData` <a name="ResetInputData" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetInputData"></a>

```go
func ResetInputData()
```

##### `ResetPage` <a name="ResetPage" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetPage"></a>

```go
func ResetPage()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetResourceArn"></a>

```go
func ResetResourceArn()
```

##### `ResetSlug` <a name="ResetSlug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetSlug"></a>

```go
func ResetSlug()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputDataInput">InputDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.pageInput">PageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slugInput">SlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputData">InputData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.page">Page</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slug">Slug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputDataInput`<sup>Optional</sup> <a name="InputDataInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputDataInput"></a>

```go
func InputDataInput() *string
```

- *Type:* *string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.pageInput"></a>

```go
func PageInput() *string
```

- *Type:* *string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `SlugInput`<sup>Optional</sup> <a name="SlugInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slugInput"></a>

```go
func SlugInput() *string
```

- *Type:* *string

---

##### `InputData`<sup>Required</sup> <a name="InputData" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputData"></a>

```go
func InputData() *string
```

- *Type:* *string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.page"></a>

```go
func Page() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slug"></a>

```go
func Slug() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceTagsList <a name="ConnectWorkspaceTagsList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectWorkspaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get"></a>

```go
func Get(index *f64) ConnectWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceTagsOutputReference <a name="ConnectWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectWorkspaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeDarkOutputReference <a name="ConnectWorkspaceThemeDarkOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeDarkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeDarkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette">PutPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography">PutTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetPalette">ResetPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetTypography">ResetTypography</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPalette` <a name="PutPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette"></a>

```go
func PutPalette(value ConnectWorkspaceThemeDarkPalette)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

---

##### `PutTypography` <a name="PutTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography"></a>

```go
func PutTypography(value ConnectWorkspaceThemeDarkTypography)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

---

##### `ResetPalette` <a name="ResetPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetPalette"></a>

```go
func ResetPalette()
```

##### `ResetTypography` <a name="ResetTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetTypography"></a>

```go
func ResetTypography()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.palette">Palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference">ConnectWorkspaceThemeDarkPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typography">Typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference">ConnectWorkspaceThemeDarkTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.paletteInput">PaletteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typographyInput">TypographyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Palette`<sup>Required</sup> <a name="Palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.palette"></a>

```go
func Palette() ConnectWorkspaceThemeDarkPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference">ConnectWorkspaceThemeDarkPaletteOutputReference</a>

---

##### `Typography`<sup>Required</sup> <a name="Typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typography"></a>

```go
func Typography() ConnectWorkspaceThemeDarkTypographyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference">ConnectWorkspaceThemeDarkTypographyOutputReference</a>

---

##### `PaletteInput`<sup>Optional</sup> <a name="PaletteInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.paletteInput"></a>

```go
func PaletteInput() interface{}
```

- *Type:* interface{}

---

##### `TypographyInput`<sup>Optional</sup> <a name="TypographyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typographyInput"></a>

```go
func TypographyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeDarkPaletteCanvasOutputReference <a name="ConnectWorkspaceThemeDarkPaletteCanvasOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeDarkPaletteCanvasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeDarkPaletteCanvasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetActiveBackground">ResetActiveBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetContainerBackground">ResetContainerBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetPageBackground">ResetPageBackground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveBackground` <a name="ResetActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetActiveBackground"></a>

```go
func ResetActiveBackground()
```

##### `ResetContainerBackground` <a name="ResetContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetContainerBackground"></a>

```go
func ResetContainerBackground()
```

##### `ResetPageBackground` <a name="ResetPageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetPageBackground"></a>

```go
func ResetPageBackground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackgroundInput">ActiveBackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackgroundInput">ContainerBackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackgroundInput">PageBackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground">ActiveBackground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground">ContainerBackground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground">PageBackground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveBackgroundInput`<sup>Optional</sup> <a name="ActiveBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackgroundInput"></a>

```go
func ActiveBackgroundInput() *string
```

- *Type:* *string

---

##### `ContainerBackgroundInput`<sup>Optional</sup> <a name="ContainerBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackgroundInput"></a>

```go
func ContainerBackgroundInput() *string
```

- *Type:* *string

---

##### `PageBackgroundInput`<sup>Optional</sup> <a name="PageBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackgroundInput"></a>

```go
func PageBackgroundInput() *string
```

- *Type:* *string

---

##### `ActiveBackground`<sup>Required</sup> <a name="ActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground"></a>

```go
func ActiveBackground() *string
```

- *Type:* *string

---

##### `ContainerBackground`<sup>Required</sup> <a name="ContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground"></a>

```go
func ContainerBackground() *string
```

- *Type:* *string

---

##### `PageBackground`<sup>Required</sup> <a name="PageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground"></a>

```go
func PageBackground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeDarkPaletteHeaderOutputReference <a name="ConnectWorkspaceThemeDarkPaletteHeaderOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeDarkPaletteHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeDarkPaletteHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetInvertActionsColors">ResetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetTextHover">ResetTextHover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetBackground"></a>

```go
func ResetBackground()
```

##### `ResetInvertActionsColors` <a name="ResetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetInvertActionsColors"></a>

```go
func ResetInvertActionsColors()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetTextHover` <a name="ResetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetTextHover"></a>

```go
func ResetTextHover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColorsInput">InvertActionsColorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHoverInput">TextHoverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover">TextHover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.backgroundInput"></a>

```go
func BackgroundInput() *string
```

- *Type:* *string

---

##### `InvertActionsColorsInput`<sup>Optional</sup> <a name="InvertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColorsInput"></a>

```go
func InvertActionsColorsInput() interface{}
```

- *Type:* interface{}

---

##### `TextHoverInput`<sup>Optional</sup> <a name="TextHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHoverInput"></a>

```go
func TextHoverInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors"></a>

```go
func InvertActionsColors() interface{}
```

- *Type:* interface{}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover"></a>

```go
func TextHover() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeDarkPaletteNavigationOutputReference <a name="ConnectWorkspaceThemeDarkPaletteNavigationOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeDarkPaletteNavigationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeDarkPaletteNavigationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetInvertActionsColors">ResetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextActive">ResetTextActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundActive">ResetTextBackgroundActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundHover">ResetTextBackgroundHover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextHover">ResetTextHover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetBackground"></a>

```go
func ResetBackground()
```

##### `ResetInvertActionsColors` <a name="ResetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetInvertActionsColors"></a>

```go
func ResetInvertActionsColors()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetTextActive` <a name="ResetTextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextActive"></a>

```go
func ResetTextActive()
```

##### `ResetTextBackgroundActive` <a name="ResetTextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundActive"></a>

```go
func ResetTextBackgroundActive()
```

##### `ResetTextBackgroundHover` <a name="ResetTextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundHover"></a>

```go
func ResetTextBackgroundHover()
```

##### `ResetTextHover` <a name="ResetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextHover"></a>

```go
func ResetTextHover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColorsInput">InvertActionsColorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActiveInput">TextActiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActiveInput">TextBackgroundActiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHoverInput">TextBackgroundHoverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHoverInput">TextHoverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive">TextActive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive">TextBackgroundActive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover">TextBackgroundHover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover">TextHover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.backgroundInput"></a>

```go
func BackgroundInput() *string
```

- *Type:* *string

---

##### `InvertActionsColorsInput`<sup>Optional</sup> <a name="InvertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColorsInput"></a>

```go
func InvertActionsColorsInput() interface{}
```

- *Type:* interface{}

---

##### `TextActiveInput`<sup>Optional</sup> <a name="TextActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActiveInput"></a>

```go
func TextActiveInput() *string
```

- *Type:* *string

---

##### `TextBackgroundActiveInput`<sup>Optional</sup> <a name="TextBackgroundActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActiveInput"></a>

```go
func TextBackgroundActiveInput() *string
```

- *Type:* *string

---

##### `TextBackgroundHoverInput`<sup>Optional</sup> <a name="TextBackgroundHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHoverInput"></a>

```go
func TextBackgroundHoverInput() *string
```

- *Type:* *string

---

##### `TextHoverInput`<sup>Optional</sup> <a name="TextHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHoverInput"></a>

```go
func TextHoverInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors"></a>

```go
func InvertActionsColors() interface{}
```

- *Type:* interface{}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `TextActive`<sup>Required</sup> <a name="TextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive"></a>

```go
func TextActive() *string
```

- *Type:* *string

---

##### `TextBackgroundActive`<sup>Required</sup> <a name="TextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```go
func TextBackgroundActive() *string
```

- *Type:* *string

---

##### `TextBackgroundHover`<sup>Required</sup> <a name="TextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```go
func TextBackgroundHover() *string
```

- *Type:* *string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover"></a>

```go
func TextHover() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeDarkPaletteOutputReference <a name="ConnectWorkspaceThemeDarkPaletteOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeDarkPaletteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeDarkPaletteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas">PutCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation">PutNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary">PutPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetCanvas">ResetCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetNavigation">ResetNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCanvas` <a name="PutCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas"></a>

```go
func PutCanvas(value ConnectWorkspaceThemeDarkPaletteCanvas)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

---

##### `PutHeader` <a name="PutHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader"></a>

```go
func PutHeader(value ConnectWorkspaceThemeDarkPaletteHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

---

##### `PutNavigation` <a name="PutNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation"></a>

```go
func PutNavigation(value ConnectWorkspaceThemeDarkPaletteNavigation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

---

##### `PutPrimary` <a name="PutPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary"></a>

```go
func PutPrimary(value ConnectWorkspaceThemeDarkPalettePrimary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

---

##### `ResetCanvas` <a name="ResetCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetCanvas"></a>

```go
func ResetCanvas()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetNavigation` <a name="ResetNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetNavigation"></a>

```go
func ResetNavigation()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetPrimary"></a>

```go
func ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas">Canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference">ConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference">ConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation">Navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference">ConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference">ConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvasInput">CanvasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigationInput">NavigationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Canvas`<sup>Required</sup> <a name="Canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas"></a>

```go
func Canvas() ConnectWorkspaceThemeDarkPaletteCanvasOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference">ConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.header"></a>

```go
func Header() ConnectWorkspaceThemeDarkPaletteHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference">ConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a>

---

##### `Navigation`<sup>Required</sup> <a name="Navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation"></a>

```go
func Navigation() ConnectWorkspaceThemeDarkPaletteNavigationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference">ConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primary"></a>

```go
func Primary() ConnectWorkspaceThemeDarkPalettePrimaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference">ConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a>

---

##### `CanvasInput`<sup>Optional</sup> <a name="CanvasInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvasInput"></a>

```go
func CanvasInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `NavigationInput`<sup>Optional</sup> <a name="NavigationInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigationInput"></a>

```go
func NavigationInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeDarkPalettePrimaryOutputReference <a name="ConnectWorkspaceThemeDarkPalettePrimaryOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeDarkPalettePrimaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeDarkPalettePrimaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetContrastText">ResetContrastText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetActive"></a>

```go
func ResetActive()
```

##### `ResetContrastText` <a name="ResetContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetContrastText"></a>

```go
func ResetContrastText()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.activeInput">ActiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastTextInput">ContrastTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active">Active</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText">ContrastText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.activeInput"></a>

```go
func ActiveInput() *string
```

- *Type:* *string

---

##### `ContrastTextInput`<sup>Optional</sup> <a name="ContrastTextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastTextInput"></a>

```go
func ContrastTextInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active"></a>

```go
func Active() *string
```

- *Type:* *string

---

##### `ContrastText`<sup>Required</sup> <a name="ContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText"></a>

```go
func ContrastText() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference <a name="ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeDarkTypographyOutputReference <a name="ConnectWorkspaceThemeDarkTypographyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeDarkTypographyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeDarkTypographyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily">PutFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resetFontFamily">ResetFontFamily</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFontFamily` <a name="PutFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily"></a>

```go
func PutFontFamily(value ConnectWorkspaceThemeDarkTypographyFontFamily)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

---

##### `ResetFontFamily` <a name="ResetFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resetFontFamily"></a>

```go
func ResetFontFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily">FontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamilyInput">FontFamilyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily"></a>

```go
func FontFamily() ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a>

---

##### `FontFamilyInput`<sup>Optional</sup> <a name="FontFamilyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamilyInput"></a>

```go
func FontFamilyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeLightOutputReference <a name="ConnectWorkspaceThemeLightOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeLightOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeLightOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette">PutPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography">PutTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetPalette">ResetPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetTypography">ResetTypography</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPalette` <a name="PutPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette"></a>

```go
func PutPalette(value ConnectWorkspaceThemeLightPalette)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

---

##### `PutTypography` <a name="PutTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography"></a>

```go
func PutTypography(value ConnectWorkspaceThemeLightTypography)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

---

##### `ResetPalette` <a name="ResetPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetPalette"></a>

```go
func ResetPalette()
```

##### `ResetTypography` <a name="ResetTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetTypography"></a>

```go
func ResetTypography()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.palette">Palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference">ConnectWorkspaceThemeLightPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typography">Typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference">ConnectWorkspaceThemeLightTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.paletteInput">PaletteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typographyInput">TypographyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Palette`<sup>Required</sup> <a name="Palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.palette"></a>

```go
func Palette() ConnectWorkspaceThemeLightPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference">ConnectWorkspaceThemeLightPaletteOutputReference</a>

---

##### `Typography`<sup>Required</sup> <a name="Typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typography"></a>

```go
func Typography() ConnectWorkspaceThemeLightTypographyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference">ConnectWorkspaceThemeLightTypographyOutputReference</a>

---

##### `PaletteInput`<sup>Optional</sup> <a name="PaletteInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.paletteInput"></a>

```go
func PaletteInput() interface{}
```

- *Type:* interface{}

---

##### `TypographyInput`<sup>Optional</sup> <a name="TypographyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typographyInput"></a>

```go
func TypographyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeLightPaletteCanvasOutputReference <a name="ConnectWorkspaceThemeLightPaletteCanvasOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeLightPaletteCanvasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeLightPaletteCanvasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetActiveBackground">ResetActiveBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetContainerBackground">ResetContainerBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetPageBackground">ResetPageBackground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveBackground` <a name="ResetActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetActiveBackground"></a>

```go
func ResetActiveBackground()
```

##### `ResetContainerBackground` <a name="ResetContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetContainerBackground"></a>

```go
func ResetContainerBackground()
```

##### `ResetPageBackground` <a name="ResetPageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetPageBackground"></a>

```go
func ResetPageBackground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackgroundInput">ActiveBackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackgroundInput">ContainerBackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackgroundInput">PageBackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground">ActiveBackground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground">ContainerBackground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground">PageBackground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveBackgroundInput`<sup>Optional</sup> <a name="ActiveBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackgroundInput"></a>

```go
func ActiveBackgroundInput() *string
```

- *Type:* *string

---

##### `ContainerBackgroundInput`<sup>Optional</sup> <a name="ContainerBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackgroundInput"></a>

```go
func ContainerBackgroundInput() *string
```

- *Type:* *string

---

##### `PageBackgroundInput`<sup>Optional</sup> <a name="PageBackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackgroundInput"></a>

```go
func PageBackgroundInput() *string
```

- *Type:* *string

---

##### `ActiveBackground`<sup>Required</sup> <a name="ActiveBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground"></a>

```go
func ActiveBackground() *string
```

- *Type:* *string

---

##### `ContainerBackground`<sup>Required</sup> <a name="ContainerBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground"></a>

```go
func ContainerBackground() *string
```

- *Type:* *string

---

##### `PageBackground`<sup>Required</sup> <a name="PageBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground"></a>

```go
func PageBackground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeLightPaletteHeaderOutputReference <a name="ConnectWorkspaceThemeLightPaletteHeaderOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeLightPaletteHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeLightPaletteHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetInvertActionsColors">ResetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetTextHover">ResetTextHover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetBackground"></a>

```go
func ResetBackground()
```

##### `ResetInvertActionsColors` <a name="ResetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetInvertActionsColors"></a>

```go
func ResetInvertActionsColors()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetTextHover` <a name="ResetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetTextHover"></a>

```go
func ResetTextHover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColorsInput">InvertActionsColorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHoverInput">TextHoverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover">TextHover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.backgroundInput"></a>

```go
func BackgroundInput() *string
```

- *Type:* *string

---

##### `InvertActionsColorsInput`<sup>Optional</sup> <a name="InvertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColorsInput"></a>

```go
func InvertActionsColorsInput() interface{}
```

- *Type:* interface{}

---

##### `TextHoverInput`<sup>Optional</sup> <a name="TextHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHoverInput"></a>

```go
func TextHoverInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors"></a>

```go
func InvertActionsColors() interface{}
```

- *Type:* interface{}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover"></a>

```go
func TextHover() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeLightPaletteNavigationOutputReference <a name="ConnectWorkspaceThemeLightPaletteNavigationOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeLightPaletteNavigationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeLightPaletteNavigationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetBackground">ResetBackground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetInvertActionsColors">ResetInvertActionsColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextActive">ResetTextActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundActive">ResetTextBackgroundActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundHover">ResetTextBackgroundHover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextHover">ResetTextHover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackground` <a name="ResetBackground" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetBackground"></a>

```go
func ResetBackground()
```

##### `ResetInvertActionsColors` <a name="ResetInvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetInvertActionsColors"></a>

```go
func ResetInvertActionsColors()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetTextActive` <a name="ResetTextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextActive"></a>

```go
func ResetTextActive()
```

##### `ResetTextBackgroundActive` <a name="ResetTextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundActive"></a>

```go
func ResetTextBackgroundActive()
```

##### `ResetTextBackgroundHover` <a name="ResetTextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundHover"></a>

```go
func ResetTextBackgroundHover()
```

##### `ResetTextHover` <a name="ResetTextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextHover"></a>

```go
func ResetTextHover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.backgroundInput">BackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColorsInput">InvertActionsColorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActiveInput">TextActiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActiveInput">TextBackgroundActiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHoverInput">TextBackgroundHoverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHoverInput">TextHoverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive">TextActive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive">TextBackgroundActive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover">TextBackgroundHover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover">TextHover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundInput`<sup>Optional</sup> <a name="BackgroundInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.backgroundInput"></a>

```go
func BackgroundInput() *string
```

- *Type:* *string

---

##### `InvertActionsColorsInput`<sup>Optional</sup> <a name="InvertActionsColorsInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColorsInput"></a>

```go
func InvertActionsColorsInput() interface{}
```

- *Type:* interface{}

---

##### `TextActiveInput`<sup>Optional</sup> <a name="TextActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActiveInput"></a>

```go
func TextActiveInput() *string
```

- *Type:* *string

---

##### `TextBackgroundActiveInput`<sup>Optional</sup> <a name="TextBackgroundActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActiveInput"></a>

```go
func TextBackgroundActiveInput() *string
```

- *Type:* *string

---

##### `TextBackgroundHoverInput`<sup>Optional</sup> <a name="TextBackgroundHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHoverInput"></a>

```go
func TextBackgroundHoverInput() *string
```

- *Type:* *string

---

##### `TextHoverInput`<sup>Optional</sup> <a name="TextHoverInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHoverInput"></a>

```go
func TextHoverInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors"></a>

```go
func InvertActionsColors() interface{}
```

- *Type:* interface{}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `TextActive`<sup>Required</sup> <a name="TextActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive"></a>

```go
func TextActive() *string
```

- *Type:* *string

---

##### `TextBackgroundActive`<sup>Required</sup> <a name="TextBackgroundActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```go
func TextBackgroundActive() *string
```

- *Type:* *string

---

##### `TextBackgroundHover`<sup>Required</sup> <a name="TextBackgroundHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```go
func TextBackgroundHover() *string
```

- *Type:* *string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover"></a>

```go
func TextHover() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeLightPaletteOutputReference <a name="ConnectWorkspaceThemeLightPaletteOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeLightPaletteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeLightPaletteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas">PutCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation">PutNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary">PutPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetCanvas">ResetCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetNavigation">ResetNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCanvas` <a name="PutCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas"></a>

```go
func PutCanvas(value ConnectWorkspaceThemeLightPaletteCanvas)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

---

##### `PutHeader` <a name="PutHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader"></a>

```go
func PutHeader(value ConnectWorkspaceThemeLightPaletteHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

---

##### `PutNavigation` <a name="PutNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation"></a>

```go
func PutNavigation(value ConnectWorkspaceThemeLightPaletteNavigation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

---

##### `PutPrimary` <a name="PutPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary"></a>

```go
func PutPrimary(value ConnectWorkspaceThemeLightPalettePrimary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

---

##### `ResetCanvas` <a name="ResetCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetCanvas"></a>

```go
func ResetCanvas()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetNavigation` <a name="ResetNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetNavigation"></a>

```go
func ResetNavigation()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetPrimary"></a>

```go
func ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvas">Canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference">ConnectWorkspaceThemeLightPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference">ConnectWorkspaceThemeLightPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigation">Navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference">ConnectWorkspaceThemeLightPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference">ConnectWorkspaceThemeLightPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvasInput">CanvasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigationInput">NavigationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Canvas`<sup>Required</sup> <a name="Canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvas"></a>

```go
func Canvas() ConnectWorkspaceThemeLightPaletteCanvasOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference">ConnectWorkspaceThemeLightPaletteCanvasOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.header"></a>

```go
func Header() ConnectWorkspaceThemeLightPaletteHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference">ConnectWorkspaceThemeLightPaletteHeaderOutputReference</a>

---

##### `Navigation`<sup>Required</sup> <a name="Navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigation"></a>

```go
func Navigation() ConnectWorkspaceThemeLightPaletteNavigationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference">ConnectWorkspaceThemeLightPaletteNavigationOutputReference</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primary"></a>

```go
func Primary() ConnectWorkspaceThemeLightPalettePrimaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference">ConnectWorkspaceThemeLightPalettePrimaryOutputReference</a>

---

##### `CanvasInput`<sup>Optional</sup> <a name="CanvasInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvasInput"></a>

```go
func CanvasInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `NavigationInput`<sup>Optional</sup> <a name="NavigationInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigationInput"></a>

```go
func NavigationInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeLightPalettePrimaryOutputReference <a name="ConnectWorkspaceThemeLightPalettePrimaryOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeLightPalettePrimaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeLightPalettePrimaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetContrastText">ResetContrastText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetActive"></a>

```go
func ResetActive()
```

##### `ResetContrastText` <a name="ResetContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetContrastText"></a>

```go
func ResetContrastText()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.activeInput">ActiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastTextInput">ContrastTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active">Active</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText">ContrastText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.activeInput"></a>

```go
func ActiveInput() *string
```

- *Type:* *string

---

##### `ContrastTextInput`<sup>Optional</sup> <a name="ContrastTextInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastTextInput"></a>

```go
func ContrastTextInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active"></a>

```go
func Active() *string
```

- *Type:* *string

---

##### `ContrastText`<sup>Required</sup> <a name="ContrastText" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText"></a>

```go
func ContrastText() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference <a name="ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeLightTypographyFontFamilyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeLightTypographyOutputReference <a name="ConnectWorkspaceThemeLightTypographyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeLightTypographyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeLightTypographyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily">PutFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resetFontFamily">ResetFontFamily</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFontFamily` <a name="PutFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily"></a>

```go
func PutFontFamily(value ConnectWorkspaceThemeLightTypographyFontFamily)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

---

##### `ResetFontFamily` <a name="ResetFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resetFontFamily"></a>

```go
func ResetFontFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily">FontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamilyInput">FontFamilyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily"></a>

```go
func FontFamily() ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a>

---

##### `FontFamilyInput`<sup>Optional</sup> <a name="FontFamilyInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamilyInput"></a>

```go
func FontFamilyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectWorkspaceThemeOutputReference <a name="ConnectWorkspaceThemeOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectworkspace"

connectworkspace.NewConnectWorkspaceThemeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectWorkspaceThemeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark">PutDark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight">PutLight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetDark">ResetDark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetLight">ResetLight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDark` <a name="PutDark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark"></a>

```go
func PutDark(value ConnectWorkspaceThemeDark)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

---

##### `PutLight` <a name="PutLight" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight"></a>

```go
func PutLight(value ConnectWorkspaceThemeLight)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

---

##### `ResetDark` <a name="ResetDark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetDark"></a>

```go
func ResetDark()
```

##### `ResetLight` <a name="ResetLight" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetLight"></a>

```go
func ResetLight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.dark">Dark</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference">ConnectWorkspaceThemeDarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.light">Light</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference">ConnectWorkspaceThemeLightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.darkInput">DarkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.lightInput">LightInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dark`<sup>Required</sup> <a name="Dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.dark"></a>

```go
func Dark() ConnectWorkspaceThemeDarkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference">ConnectWorkspaceThemeDarkOutputReference</a>

---

##### `Light`<sup>Required</sup> <a name="Light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.light"></a>

```go
func Light() ConnectWorkspaceThemeLightOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference">ConnectWorkspaceThemeLightOutputReference</a>

---

##### `DarkInput`<sup>Optional</sup> <a name="DarkInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.darkInput"></a>

```go
func DarkInput() interface{}
```

- *Type:* interface{}

---

##### `LightInput`<sup>Optional</sup> <a name="LightInput" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.lightInput"></a>

```go
func LightInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



