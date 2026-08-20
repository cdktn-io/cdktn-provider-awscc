# `quicksightCustomPermissions` Submodule <a name="`quicksightCustomPermissions` Submodule" id="@cdktn/provider-awscc.quicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightCustomPermissions <a name="QuicksightCustomPermissions" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions awscc_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

quicksightcustompermissions.NewQuicksightCustomPermissions(scope Construct, id *string, config QuicksightCustomPermissionsConfig) QuicksightCustomPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig">QuicksightCustomPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig">QuicksightCustomPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities">PutCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapabilities` <a name="PutCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities"></a>

```go
func PutCapabilities(value QuicksightCustomPermissionsCapabilities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities"></a>

```go
func ResetCapabilities()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

quicksightcustompermissions.QuicksightCustomPermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

quicksightcustompermissions.QuicksightCustomPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

quicksightcustompermissions.QuicksightCustomPermissions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

quicksightcustompermissions.QuicksightCustomPermissions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightCustomPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference">QuicksightCustomPermissionsCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList">QuicksightCustomPermissionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput">CustomPermissionsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName">CustomPermissionsName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities"></a>

```go
func Capabilities() QuicksightCustomPermissionsCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference">QuicksightCustomPermissionsCapabilitiesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags"></a>

```go
func Tags() QuicksightCustomPermissionsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList">QuicksightCustomPermissionsTagsList</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `CustomPermissionsNameInput`<sup>Optional</sup> <a name="CustomPermissionsNameInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput"></a>

```go
func CustomPermissionsNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `CustomPermissionsName`<sup>Required</sup> <a name="CustomPermissionsName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName"></a>

```go
func CustomPermissionsName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightCustomPermissionsCapabilities <a name="QuicksightCustomPermissionsCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

&quicksightcustompermissions.QuicksightCustomPermissionsCapabilities {
	AccessAppsNativeDataStore: *string,
	Action: *string,
	AddOrRunAnomalyDetectionForAnalyses: *string,
	AmazonBedrockArsAction: *string,
	AmazonBedrockFsAction: *string,
	AmazonBedrockKrsAction: *string,
	AmazonSThreeAction: *string,
	Analysis: *string,
	ApproveFlowShareRequests: *string,
	Apps: *string,
	AsanaAction: *string,
	Automate: *string,
	BambooHrAction: *string,
	BoxAgentAction: *string,
	BuildCalculatedFieldWithQ: *string,
	CanvaAgentAction: *string,
	ChatAgent: *string,
	ComprehendAction: *string,
	ComprehendMedicalAction: *string,
	ConfluenceAction: *string,
	CreateAndUpdateAmazonBedrockArsAction: *string,
	CreateAndUpdateAmazonBedrockFsAction: *string,
	CreateAndUpdateAmazonBedrockKrsAction: *string,
	CreateAndUpdateAmazonSThreeAction: *string,
	CreateAndUpdateApps: *string,
	CreateAndUpdateAsanaAction: *string,
	CreateAndUpdateBambooHrAction: *string,
	CreateAndUpdateBoxAgentAction: *string,
	CreateAndUpdateCanvaAgentAction: *string,
	CreateAndUpdateComprehendAction: *string,
	CreateAndUpdateComprehendMedicalAction: *string,
	CreateAndUpdateConfluenceAction: *string,
	CreateAndUpdateDashboardEmailReports: *string,
	CreateAndUpdateDatasets: *string,
	CreateAndUpdateDataSources: *string,
	CreateAndUpdateFactSetAction: *string,
	CreateAndUpdateGenericHttpAction: *string,
	CreateAndUpdateGithubAction: *string,
	CreateAndUpdateGoogleCalendarAction: *string,
	CreateAndUpdateHubspotAction: *string,
	CreateAndUpdateHuggingFaceAction: *string,
	CreateAndUpdateIntercomAction: *string,
	CreateAndUpdateJiraAction: *string,
	CreateAndUpdateKnowledgeBases: *string,
	CreateAndUpdateLinearAction: *string,
	CreateAndUpdateMcpAction: *string,
	CreateAndUpdateMondayAction: *string,
	CreateAndUpdateMsExchangeAction: *string,
	CreateAndUpdateMsTeamsAction: *string,
	CreateAndUpdateNewRelicAction: *string,
	CreateAndUpdateNotionAction: *string,
	CreateAndUpdateOneDriveAction: *string,
	CreateAndUpdateOpenApiAction: *string,
	CreateAndUpdatePagerDutyAction: *string,
	CreateAndUpdateSalesforceAction: *string,
	CreateAndUpdateSandPGlobalEnergyAction: *string,
	CreateAndUpdateSandPgmiAction: *string,
	CreateAndUpdateSapBillOfMaterialAction: *string,
	CreateAndUpdateSapBusinessPartnerAction: *string,
	CreateAndUpdateSapMaterialStockAction: *string,
	CreateAndUpdateSapPhysicalInventoryAction: *string,
	CreateAndUpdateSapProductMasterDataAction: *string,
	CreateAndUpdateServiceNowAction: *string,
	CreateAndUpdateSharePointAction: *string,
	CreateAndUpdateSlackAction: *string,
	CreateAndUpdateSmartsheetAction: *string,
	CreateAndUpdateTextractAction: *string,
	CreateAndUpdateThemes: *string,
	CreateAndUpdateThresholdAlerts: *string,
	CreateAndUpdateZendeskAction: *string,
	CreateChatAgents: *string,
	CreateDashboardExecutiveSummaryWithQ: *string,
	CreateSharedFolders: *string,
	CreateSpaces: *string,
	CreateSpiceDataset: *string,
	Dashboard: *string,
	EditVisualWithQ: *string,
	ExportToCsv: *string,
	ExportToCsvInScheduledReports: *string,
	ExportToExcel: *string,
	ExportToExcelInScheduledReports: *string,
	ExportToPdf: *string,
	ExportToPdfInScheduledReports: *string,
	Extension: *string,
	FactSetAction: *string,
	Flow: *string,
	GenericHttpAction: *string,
	GithubAction: *string,
	GoogleCalendarAction: *string,
	HubspotAction: *string,
	HuggingFaceAction: *string,
	IncludeContentInScheduledReportsEmail: *string,
	IntercomAction: *string,
	InvokeAppsAiInference: *string,
	JiraAction: *string,
	KnowledgeBase: *string,
	LinearAction: *string,
	ManageSharedFolders: *string,
	McpAction: *string,
	MondayAction: *string,
	MsExchangeAction: *string,
	MsTeamsAction: *string,
	NewRelicAction: *string,
	NotionAction: *string,
	OneDriveAction: *string,
	OpenApiAction: *string,
	PagerDutyAction: *string,
	PerformFlowUiTask: *string,
	PrintReports: *string,
	PublishWithoutApproval: *string,
	RenameSharedFolders: *string,
	Research: *string,
	SalesforceAction: *string,
	SandPGlobalEnergyAction: *string,
	SandPgmiAction: *string,
	SapBillOfMaterialAction: *string,
	SapBusinessPartnerAction: *string,
	SapMaterialStockAction: *string,
	SapPhysicalInventoryAction: *string,
	SapProductMasterDataAction: *string,
	ServiceNowAction: *string,
	ShareAmazonBedrockArsAction: *string,
	ShareAmazonBedrockFsAction: *string,
	ShareAmazonBedrockKrsAction: *string,
	ShareAmazonSThreeAction: *string,
	ShareAnalyses: *string,
	ShareApps: *string,
	ShareAsanaAction: *string,
	ShareBambooHrAction: *string,
	ShareBoxAgentAction: *string,
	ShareCanvaAgentAction: *string,
	ShareChatAgents: *string,
	ShareComprehendAction: *string,
	ShareComprehendMedicalAction: *string,
	ShareConfluenceAction: *string,
	ShareDashboards: *string,
	ShareDatasets: *string,
	ShareDataSources: *string,
	ShareFactSetAction: *string,
	ShareGenericHttpAction: *string,
	ShareGithubAction: *string,
	ShareGoogleCalendarAction: *string,
	ShareHubspotAction: *string,
	ShareHuggingFaceAction: *string,
	ShareIntercomAction: *string,
	ShareJiraAction: *string,
	ShareKnowledgeBases: *string,
	ShareLinearAction: *string,
	ShareMcpAction: *string,
	ShareMondayAction: *string,
	ShareMsExchangeAction: *string,
	ShareMsTeamsAction: *string,
	ShareNewRelicAction: *string,
	ShareNotionAction: *string,
	ShareOneDriveAction: *string,
	ShareOpenApiAction: *string,
	SharePagerDutyAction: *string,
	SharePointAction: *string,
	ShareSalesforceAction: *string,
	ShareSandPGlobalEnergyAction: *string,
	ShareSandPgmiAction: *string,
	ShareSapBillOfMaterialAction: *string,
	ShareSapBusinessPartnerAction: *string,
	ShareSapMaterialStockAction: *string,
	ShareSapPhysicalInventoryAction: *string,
	ShareSapProductMasterDataAction: *string,
	ShareServiceNowAction: *string,
	ShareSharePointAction: *string,
	ShareSlackAction: *string,
	ShareSmartsheetAction: *string,
	ShareSpaces: *string,
	ShareTextractAction: *string,
	ShareZendeskAction: *string,
	SlackAction: *string,
	SmartsheetAction: *string,
	Space: *string,
	SubscribeDashboardEmailReports: *string,
	TextractAction: *string,
	Topic: *string,
	UseAgentWebSearch: *string,
	UseAmazonBedrockArsAction: *string,
	UseAmazonBedrockFsAction: *string,
	UseAmazonBedrockKrsAction: *string,
	UseAmazonSThreeAction: *string,
	UseAsanaAction: *string,
	UseBambooHrAction: *string,
	UseBedrockModels: *string,
	UseBoxAgentAction: *string,
	UseCanvaAgentAction: *string,
	UseComprehendAction: *string,
	UseComprehendMedicalAction: *string,
	UseConfluenceAction: *string,
	UseFactSetAction: *string,
	UseGenericHttpAction: *string,
	UseGithubAction: *string,
	UseGoogleCalendarAction: *string,
	UseHubspotAction: *string,
	UseHuggingFaceAction: *string,
	UseIntercomAction: *string,
	UseJiraAction: *string,
	UseLinearAction: *string,
	UseMcpAction: *string,
	UseMondayAction: *string,
	UseMsExchangeAction: *string,
	UseMsTeamsAction: *string,
	UseNewRelicAction: *string,
	UseNotionAction: *string,
	UseOneDriveAction: *string,
	UseOpenApiAction: *string,
	UsePagerDutyAction: *string,
	UseSalesforceAction: *string,
	UseSandPGlobalEnergyAction: *string,
	UseSandPgmiAction: *string,
	UseSapBillOfMaterialAction: *string,
	UseSapBusinessPartnerAction: *string,
	UseSapMaterialStockAction: *string,
	UseSapPhysicalInventoryAction: *string,
	UseSapProductMasterDataAction: *string,
	UseServiceNowAction: *string,
	UseSharePointAction: *string,
	UseSlackAction: *string,
	UseSmartsheetAction: *string,
	UseTextractAction: *string,
	UseZendeskAction: *string,
	ViewAccountSpiceCapacity: *string,
	ZendeskAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.accessAppsNativeDataStore">AccessAppsNativeDataStore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses">AddOrRunAnomalyDetectionForAnalyses</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockArsAction">AmazonBedrockArsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockFsAction">AmazonBedrockFsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockKrsAction">AmazonBedrockKrsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonSThreeAction">AmazonSThreeAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.analysis">Analysis</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.approveFlowShareRequests">ApproveFlowShareRequests</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.apps">Apps</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.asanaAction">AsanaAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.automate">Automate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.bambooHrAction">BambooHrAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.boxAgentAction">BoxAgentAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.buildCalculatedFieldWithQ">BuildCalculatedFieldWithQ</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.canvaAgentAction">CanvaAgentAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.chatAgent">ChatAgent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendAction">ComprehendAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendMedicalAction">ComprehendMedicalAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.confluenceAction">ConfluenceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockArsAction">CreateAndUpdateAmazonBedrockArsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockFsAction">CreateAndUpdateAmazonBedrockFsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockKrsAction">CreateAndUpdateAmazonBedrockKrsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonSThreeAction">CreateAndUpdateAmazonSThreeAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateApps">CreateAndUpdateApps</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAsanaAction">CreateAndUpdateAsanaAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBambooHrAction">CreateAndUpdateBambooHrAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBoxAgentAction">CreateAndUpdateBoxAgentAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateCanvaAgentAction">CreateAndUpdateCanvaAgentAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendAction">CreateAndUpdateComprehendAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendMedicalAction">CreateAndUpdateComprehendMedicalAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateConfluenceAction">CreateAndUpdateConfluenceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports">CreateAndUpdateDashboardEmailReports</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets">CreateAndUpdateDatasets</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources">CreateAndUpdateDataSources</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateFactSetAction">CreateAndUpdateFactSetAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGenericHttpAction">CreateAndUpdateGenericHttpAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGithubAction">CreateAndUpdateGithubAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGoogleCalendarAction">CreateAndUpdateGoogleCalendarAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHubspotAction">CreateAndUpdateHubspotAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHuggingFaceAction">CreateAndUpdateHuggingFaceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateIntercomAction">CreateAndUpdateIntercomAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateJiraAction">CreateAndUpdateJiraAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateKnowledgeBases">CreateAndUpdateKnowledgeBases</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateLinearAction">CreateAndUpdateLinearAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMcpAction">CreateAndUpdateMcpAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMondayAction">CreateAndUpdateMondayAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsExchangeAction">CreateAndUpdateMsExchangeAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsTeamsAction">CreateAndUpdateMsTeamsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNewRelicAction">CreateAndUpdateNewRelicAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNotionAction">CreateAndUpdateNotionAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOneDriveAction">CreateAndUpdateOneDriveAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOpenApiAction">CreateAndUpdateOpenApiAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdatePagerDutyAction">CreateAndUpdatePagerDutyAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSalesforceAction">CreateAndUpdateSalesforceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPGlobalEnergyAction">CreateAndUpdateSandPGlobalEnergyAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPgmiAction">CreateAndUpdateSandPgmiAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBillOfMaterialAction">CreateAndUpdateSapBillOfMaterialAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBusinessPartnerAction">CreateAndUpdateSapBusinessPartnerAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapMaterialStockAction">CreateAndUpdateSapMaterialStockAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapPhysicalInventoryAction">CreateAndUpdateSapPhysicalInventoryAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapProductMasterDataAction">CreateAndUpdateSapProductMasterDataAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateServiceNowAction">CreateAndUpdateServiceNowAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSharePointAction">CreateAndUpdateSharePointAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSlackAction">CreateAndUpdateSlackAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSmartsheetAction">CreateAndUpdateSmartsheetAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateTextractAction">CreateAndUpdateTextractAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes">CreateAndUpdateThemes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts">CreateAndUpdateThresholdAlerts</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateZendeskAction">CreateAndUpdateZendeskAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createChatAgents">CreateChatAgents</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createDashboardExecutiveSummaryWithQ">CreateDashboardExecutiveSummaryWithQ</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders">CreateSharedFolders</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpaces">CreateSpaces</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset">CreateSpiceDataset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.dashboard">Dashboard</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.editVisualWithQ">EditVisualWithQ</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv">ExportToCsv</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports">ExportToCsvInScheduledReports</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel">ExportToExcel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports">ExportToExcelInScheduledReports</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf">ExportToPdf</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports">ExportToPdfInScheduledReports</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.extension">Extension</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.factSetAction">FactSetAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.flow">Flow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.genericHttpAction">GenericHttpAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.githubAction">GithubAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.googleCalendarAction">GoogleCalendarAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.hubspotAction">HubspotAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.huggingFaceAction">HuggingFaceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail">IncludeContentInScheduledReportsEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.intercomAction">IntercomAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.invokeAppsAiInference">InvokeAppsAiInference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.jiraAction">JiraAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.knowledgeBase">KnowledgeBase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.linearAction">LinearAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.manageSharedFolders">ManageSharedFolders</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mcpAction">McpAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mondayAction">MondayAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msExchangeAction">MsExchangeAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msTeamsAction">MsTeamsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.newRelicAction">NewRelicAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.notionAction">NotionAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.oneDriveAction">OneDriveAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.openApiAction">OpenApiAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.pagerDutyAction">PagerDutyAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.performFlowUiTask">PerformFlowUiTask</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports">PrintReports</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.publishWithoutApproval">PublishWithoutApproval</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders">RenameSharedFolders</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.research">Research</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.salesforceAction">SalesforceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPGlobalEnergyAction">SandPGlobalEnergyAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPgmiAction">SandPgmiAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBillOfMaterialAction">SapBillOfMaterialAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBusinessPartnerAction">SapBusinessPartnerAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapMaterialStockAction">SapMaterialStockAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapPhysicalInventoryAction">SapPhysicalInventoryAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapProductMasterDataAction">SapProductMasterDataAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.serviceNowAction">ServiceNowAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockArsAction">ShareAmazonBedrockArsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockFsAction">ShareAmazonBedrockFsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockKrsAction">ShareAmazonBedrockKrsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonSThreeAction">ShareAmazonSThreeAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses">ShareAnalyses</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareApps">ShareApps</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAsanaAction">ShareAsanaAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBambooHrAction">ShareBambooHrAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBoxAgentAction">ShareBoxAgentAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareCanvaAgentAction">ShareCanvaAgentAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareChatAgents">ShareChatAgents</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendAction">ShareComprehendAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendMedicalAction">ShareComprehendMedicalAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareConfluenceAction">ShareConfluenceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards">ShareDashboards</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets">ShareDatasets</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources">ShareDataSources</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareFactSetAction">ShareFactSetAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGenericHttpAction">ShareGenericHttpAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGithubAction">ShareGithubAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGoogleCalendarAction">ShareGoogleCalendarAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHubspotAction">ShareHubspotAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHuggingFaceAction">ShareHuggingFaceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareIntercomAction">ShareIntercomAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareJiraAction">ShareJiraAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareKnowledgeBases">ShareKnowledgeBases</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareLinearAction">ShareLinearAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMcpAction">ShareMcpAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMondayAction">ShareMondayAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsExchangeAction">ShareMsExchangeAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsTeamsAction">ShareMsTeamsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNewRelicAction">ShareNewRelicAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNotionAction">ShareNotionAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOneDriveAction">ShareOneDriveAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOpenApiAction">ShareOpenApiAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePagerDutyAction">SharePagerDutyAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePointAction">SharePointAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSalesforceAction">ShareSalesforceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPGlobalEnergyAction">ShareSandPGlobalEnergyAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPgmiAction">ShareSandPgmiAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBillOfMaterialAction">ShareSapBillOfMaterialAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBusinessPartnerAction">ShareSapBusinessPartnerAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapMaterialStockAction">ShareSapMaterialStockAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapPhysicalInventoryAction">ShareSapPhysicalInventoryAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapProductMasterDataAction">ShareSapProductMasterDataAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareServiceNowAction">ShareServiceNowAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSharePointAction">ShareSharePointAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSlackAction">ShareSlackAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSmartsheetAction">ShareSmartsheetAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSpaces">ShareSpaces</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareTextractAction">ShareTextractAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareZendeskAction">ShareZendeskAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.slackAction">SlackAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.smartsheetAction">SmartsheetAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.space">Space</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports">SubscribeDashboardEmailReports</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.textractAction">TextractAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.topic">Topic</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAgentWebSearch">UseAgentWebSearch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockArsAction">UseAmazonBedrockArsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockFsAction">UseAmazonBedrockFsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockKrsAction">UseAmazonBedrockKrsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonSThreeAction">UseAmazonSThreeAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAsanaAction">UseAsanaAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBambooHrAction">UseBambooHrAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBedrockModels">UseBedrockModels</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBoxAgentAction">UseBoxAgentAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useCanvaAgentAction">UseCanvaAgentAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendAction">UseComprehendAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendMedicalAction">UseComprehendMedicalAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useConfluenceAction">UseConfluenceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useFactSetAction">UseFactSetAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGenericHttpAction">UseGenericHttpAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGithubAction">UseGithubAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGoogleCalendarAction">UseGoogleCalendarAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHubspotAction">UseHubspotAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHuggingFaceAction">UseHuggingFaceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useIntercomAction">UseIntercomAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useJiraAction">UseJiraAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useLinearAction">UseLinearAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMcpAction">UseMcpAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMondayAction">UseMondayAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsExchangeAction">UseMsExchangeAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsTeamsAction">UseMsTeamsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNewRelicAction">UseNewRelicAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNotionAction">UseNotionAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOneDriveAction">UseOneDriveAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOpenApiAction">UseOpenApiAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.usePagerDutyAction">UsePagerDutyAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSalesforceAction">UseSalesforceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPGlobalEnergyAction">UseSandPGlobalEnergyAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPgmiAction">UseSandPgmiAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBillOfMaterialAction">UseSapBillOfMaterialAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBusinessPartnerAction">UseSapBusinessPartnerAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapMaterialStockAction">UseSapMaterialStockAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapPhysicalInventoryAction">UseSapPhysicalInventoryAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapProductMasterDataAction">UseSapProductMasterDataAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useServiceNowAction">UseServiceNowAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSharePointAction">UseSharePointAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSlackAction">UseSlackAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSmartsheetAction">UseSmartsheetAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useTextractAction">UseTextractAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useZendeskAction">UseZendeskAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity">ViewAccountSpiceCapacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.zendeskAction">ZendeskAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}. |

---

##### `AccessAppsNativeDataStore`<sup>Optional</sup> <a name="AccessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.accessAppsNativeDataStore"></a>

```go
AccessAppsNativeDataStore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}.

---

##### `AddOrRunAnomalyDetectionForAnalyses`<sup>Optional</sup> <a name="AddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses"></a>

```go
AddOrRunAnomalyDetectionForAnalyses *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}.

---

##### `AmazonBedrockArsAction`<sup>Optional</sup> <a name="AmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockArsAction"></a>

```go
AmazonBedrockArsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}.

---

##### `AmazonBedrockFsAction`<sup>Optional</sup> <a name="AmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockFsAction"></a>

```go
AmazonBedrockFsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}.

---

##### `AmazonBedrockKrsAction`<sup>Optional</sup> <a name="AmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockKrsAction"></a>

```go
AmazonBedrockKrsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}.

---

##### `AmazonSThreeAction`<sup>Optional</sup> <a name="AmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonSThreeAction"></a>

```go
AmazonSThreeAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}.

---

##### `Analysis`<sup>Optional</sup> <a name="Analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.analysis"></a>

```go
Analysis *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}.

---

##### `ApproveFlowShareRequests`<sup>Optional</sup> <a name="ApproveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.approveFlowShareRequests"></a>

```go
ApproveFlowShareRequests *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}.

---

##### `Apps`<sup>Optional</sup> <a name="Apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.apps"></a>

```go
Apps *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}.

---

##### `AsanaAction`<sup>Optional</sup> <a name="AsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.asanaAction"></a>

```go
AsanaAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}.

---

##### `Automate`<sup>Optional</sup> <a name="Automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.automate"></a>

```go
Automate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}.

---

##### `BambooHrAction`<sup>Optional</sup> <a name="BambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.bambooHrAction"></a>

```go
BambooHrAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}.

---

##### `BoxAgentAction`<sup>Optional</sup> <a name="BoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.boxAgentAction"></a>

```go
BoxAgentAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}.

---

##### `BuildCalculatedFieldWithQ`<sup>Optional</sup> <a name="BuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.buildCalculatedFieldWithQ"></a>

```go
BuildCalculatedFieldWithQ *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}.

---

##### `CanvaAgentAction`<sup>Optional</sup> <a name="CanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.canvaAgentAction"></a>

```go
CanvaAgentAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}.

---

##### `ChatAgent`<sup>Optional</sup> <a name="ChatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.chatAgent"></a>

```go
ChatAgent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}.

---

##### `ComprehendAction`<sup>Optional</sup> <a name="ComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendAction"></a>

```go
ComprehendAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}.

---

##### `ComprehendMedicalAction`<sup>Optional</sup> <a name="ComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendMedicalAction"></a>

```go
ComprehendMedicalAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}.

---

##### `ConfluenceAction`<sup>Optional</sup> <a name="ConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.confluenceAction"></a>

```go
ConfluenceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}.

---

##### `CreateAndUpdateAmazonBedrockArsAction`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockArsAction"></a>

```go
CreateAndUpdateAmazonBedrockArsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}.

---

##### `CreateAndUpdateAmazonBedrockFsAction`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockFsAction"></a>

```go
CreateAndUpdateAmazonBedrockFsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}.

---

##### `CreateAndUpdateAmazonBedrockKrsAction`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockKrsAction"></a>

```go
CreateAndUpdateAmazonBedrockKrsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}.

---

##### `CreateAndUpdateAmazonSThreeAction`<sup>Optional</sup> <a name="CreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonSThreeAction"></a>

```go
CreateAndUpdateAmazonSThreeAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}.

---

##### `CreateAndUpdateApps`<sup>Optional</sup> <a name="CreateAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateApps"></a>

```go
CreateAndUpdateApps *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}.

---

##### `CreateAndUpdateAsanaAction`<sup>Optional</sup> <a name="CreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAsanaAction"></a>

```go
CreateAndUpdateAsanaAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}.

---

##### `CreateAndUpdateBambooHrAction`<sup>Optional</sup> <a name="CreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBambooHrAction"></a>

```go
CreateAndUpdateBambooHrAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}.

---

##### `CreateAndUpdateBoxAgentAction`<sup>Optional</sup> <a name="CreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBoxAgentAction"></a>

```go
CreateAndUpdateBoxAgentAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}.

---

##### `CreateAndUpdateCanvaAgentAction`<sup>Optional</sup> <a name="CreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateCanvaAgentAction"></a>

```go
CreateAndUpdateCanvaAgentAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}.

---

##### `CreateAndUpdateComprehendAction`<sup>Optional</sup> <a name="CreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendAction"></a>

```go
CreateAndUpdateComprehendAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}.

---

##### `CreateAndUpdateComprehendMedicalAction`<sup>Optional</sup> <a name="CreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendMedicalAction"></a>

```go
CreateAndUpdateComprehendMedicalAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}.

---

##### `CreateAndUpdateConfluenceAction`<sup>Optional</sup> <a name="CreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateConfluenceAction"></a>

```go
CreateAndUpdateConfluenceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}.

---

##### `CreateAndUpdateDashboardEmailReports`<sup>Optional</sup> <a name="CreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports"></a>

```go
CreateAndUpdateDashboardEmailReports *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}.

---

##### `CreateAndUpdateDatasets`<sup>Optional</sup> <a name="CreateAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets"></a>

```go
CreateAndUpdateDatasets *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}.

---

##### `CreateAndUpdateDataSources`<sup>Optional</sup> <a name="CreateAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources"></a>

```go
CreateAndUpdateDataSources *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}.

---

##### `CreateAndUpdateFactSetAction`<sup>Optional</sup> <a name="CreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateFactSetAction"></a>

```go
CreateAndUpdateFactSetAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}.

---

##### `CreateAndUpdateGenericHttpAction`<sup>Optional</sup> <a name="CreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGenericHttpAction"></a>

```go
CreateAndUpdateGenericHttpAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}.

---

##### `CreateAndUpdateGithubAction`<sup>Optional</sup> <a name="CreateAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGithubAction"></a>

```go
CreateAndUpdateGithubAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}.

---

##### `CreateAndUpdateGoogleCalendarAction`<sup>Optional</sup> <a name="CreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGoogleCalendarAction"></a>

```go
CreateAndUpdateGoogleCalendarAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}.

---

##### `CreateAndUpdateHubspotAction`<sup>Optional</sup> <a name="CreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHubspotAction"></a>

```go
CreateAndUpdateHubspotAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}.

---

##### `CreateAndUpdateHuggingFaceAction`<sup>Optional</sup> <a name="CreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHuggingFaceAction"></a>

```go
CreateAndUpdateHuggingFaceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}.

---

##### `CreateAndUpdateIntercomAction`<sup>Optional</sup> <a name="CreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateIntercomAction"></a>

```go
CreateAndUpdateIntercomAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}.

---

##### `CreateAndUpdateJiraAction`<sup>Optional</sup> <a name="CreateAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateJiraAction"></a>

```go
CreateAndUpdateJiraAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}.

---

##### `CreateAndUpdateKnowledgeBases`<sup>Optional</sup> <a name="CreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateKnowledgeBases"></a>

```go
CreateAndUpdateKnowledgeBases *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}.

---

##### `CreateAndUpdateLinearAction`<sup>Optional</sup> <a name="CreateAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateLinearAction"></a>

```go
CreateAndUpdateLinearAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}.

---

##### `CreateAndUpdateMcpAction`<sup>Optional</sup> <a name="CreateAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMcpAction"></a>

```go
CreateAndUpdateMcpAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}.

---

##### `CreateAndUpdateMondayAction`<sup>Optional</sup> <a name="CreateAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMondayAction"></a>

```go
CreateAndUpdateMondayAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}.

---

##### `CreateAndUpdateMsExchangeAction`<sup>Optional</sup> <a name="CreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsExchangeAction"></a>

```go
CreateAndUpdateMsExchangeAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}.

---

##### `CreateAndUpdateMsTeamsAction`<sup>Optional</sup> <a name="CreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsTeamsAction"></a>

```go
CreateAndUpdateMsTeamsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}.

---

##### `CreateAndUpdateNewRelicAction`<sup>Optional</sup> <a name="CreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNewRelicAction"></a>

```go
CreateAndUpdateNewRelicAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}.

---

##### `CreateAndUpdateNotionAction`<sup>Optional</sup> <a name="CreateAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNotionAction"></a>

```go
CreateAndUpdateNotionAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}.

---

##### `CreateAndUpdateOneDriveAction`<sup>Optional</sup> <a name="CreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOneDriveAction"></a>

```go
CreateAndUpdateOneDriveAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}.

---

##### `CreateAndUpdateOpenApiAction`<sup>Optional</sup> <a name="CreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOpenApiAction"></a>

```go
CreateAndUpdateOpenApiAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}.

---

##### `CreateAndUpdatePagerDutyAction`<sup>Optional</sup> <a name="CreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdatePagerDutyAction"></a>

```go
CreateAndUpdatePagerDutyAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}.

---

##### `CreateAndUpdateSalesforceAction`<sup>Optional</sup> <a name="CreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSalesforceAction"></a>

```go
CreateAndUpdateSalesforceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}.

---

##### `CreateAndUpdateSandPGlobalEnergyAction`<sup>Optional</sup> <a name="CreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPGlobalEnergyAction"></a>

```go
CreateAndUpdateSandPGlobalEnergyAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}.

---

##### `CreateAndUpdateSandPgmiAction`<sup>Optional</sup> <a name="CreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPgmiAction"></a>

```go
CreateAndUpdateSandPgmiAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}.

---

##### `CreateAndUpdateSapBillOfMaterialAction`<sup>Optional</sup> <a name="CreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBillOfMaterialAction"></a>

```go
CreateAndUpdateSapBillOfMaterialAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}.

---

##### `CreateAndUpdateSapBusinessPartnerAction`<sup>Optional</sup> <a name="CreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBusinessPartnerAction"></a>

```go
CreateAndUpdateSapBusinessPartnerAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}.

---

##### `CreateAndUpdateSapMaterialStockAction`<sup>Optional</sup> <a name="CreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapMaterialStockAction"></a>

```go
CreateAndUpdateSapMaterialStockAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}.

---

##### `CreateAndUpdateSapPhysicalInventoryAction`<sup>Optional</sup> <a name="CreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapPhysicalInventoryAction"></a>

```go
CreateAndUpdateSapPhysicalInventoryAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}.

---

##### `CreateAndUpdateSapProductMasterDataAction`<sup>Optional</sup> <a name="CreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapProductMasterDataAction"></a>

```go
CreateAndUpdateSapProductMasterDataAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}.

---

##### `CreateAndUpdateServiceNowAction`<sup>Optional</sup> <a name="CreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateServiceNowAction"></a>

```go
CreateAndUpdateServiceNowAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}.

---

##### `CreateAndUpdateSharePointAction`<sup>Optional</sup> <a name="CreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSharePointAction"></a>

```go
CreateAndUpdateSharePointAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}.

---

##### `CreateAndUpdateSlackAction`<sup>Optional</sup> <a name="CreateAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSlackAction"></a>

```go
CreateAndUpdateSlackAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}.

---

##### `CreateAndUpdateSmartsheetAction`<sup>Optional</sup> <a name="CreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSmartsheetAction"></a>

```go
CreateAndUpdateSmartsheetAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}.

---

##### `CreateAndUpdateTextractAction`<sup>Optional</sup> <a name="CreateAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateTextractAction"></a>

```go
CreateAndUpdateTextractAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}.

---

##### `CreateAndUpdateThemes`<sup>Optional</sup> <a name="CreateAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes"></a>

```go
CreateAndUpdateThemes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}.

---

##### `CreateAndUpdateThresholdAlerts`<sup>Optional</sup> <a name="CreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts"></a>

```go
CreateAndUpdateThresholdAlerts *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}.

---

##### `CreateAndUpdateZendeskAction`<sup>Optional</sup> <a name="CreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateZendeskAction"></a>

```go
CreateAndUpdateZendeskAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}.

---

##### `CreateChatAgents`<sup>Optional</sup> <a name="CreateChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createChatAgents"></a>

```go
CreateChatAgents *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}.

---

##### `CreateDashboardExecutiveSummaryWithQ`<sup>Optional</sup> <a name="CreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createDashboardExecutiveSummaryWithQ"></a>

```go
CreateDashboardExecutiveSummaryWithQ *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}.

---

##### `CreateSharedFolders`<sup>Optional</sup> <a name="CreateSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders"></a>

```go
CreateSharedFolders *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}.

---

##### `CreateSpaces`<sup>Optional</sup> <a name="CreateSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpaces"></a>

```go
CreateSpaces *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}.

---

##### `CreateSpiceDataset`<sup>Optional</sup> <a name="CreateSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset"></a>

```go
CreateSpiceDataset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}.

---

##### `Dashboard`<sup>Optional</sup> <a name="Dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.dashboard"></a>

```go
Dashboard *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}.

---

##### `EditVisualWithQ`<sup>Optional</sup> <a name="EditVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.editVisualWithQ"></a>

```go
EditVisualWithQ *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}.

---

##### `ExportToCsv`<sup>Optional</sup> <a name="ExportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv"></a>

```go
ExportToCsv *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}.

---

##### `ExportToCsvInScheduledReports`<sup>Optional</sup> <a name="ExportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports"></a>

```go
ExportToCsvInScheduledReports *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}.

---

##### `ExportToExcel`<sup>Optional</sup> <a name="ExportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel"></a>

```go
ExportToExcel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}.

---

##### `ExportToExcelInScheduledReports`<sup>Optional</sup> <a name="ExportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports"></a>

```go
ExportToExcelInScheduledReports *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}.

---

##### `ExportToPdf`<sup>Optional</sup> <a name="ExportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf"></a>

```go
ExportToPdf *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}.

---

##### `ExportToPdfInScheduledReports`<sup>Optional</sup> <a name="ExportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports"></a>

```go
ExportToPdfInScheduledReports *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.extension"></a>

```go
Extension *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}.

---

##### `FactSetAction`<sup>Optional</sup> <a name="FactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.factSetAction"></a>

```go
FactSetAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}.

---

##### `Flow`<sup>Optional</sup> <a name="Flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.flow"></a>

```go
Flow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}.

---

##### `GenericHttpAction`<sup>Optional</sup> <a name="GenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.genericHttpAction"></a>

```go
GenericHttpAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}.

---

##### `GithubAction`<sup>Optional</sup> <a name="GithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.githubAction"></a>

```go
GithubAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}.

---

##### `GoogleCalendarAction`<sup>Optional</sup> <a name="GoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.googleCalendarAction"></a>

```go
GoogleCalendarAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}.

---

##### `HubspotAction`<sup>Optional</sup> <a name="HubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.hubspotAction"></a>

```go
HubspotAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}.

---

##### `HuggingFaceAction`<sup>Optional</sup> <a name="HuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.huggingFaceAction"></a>

```go
HuggingFaceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}.

---

##### `IncludeContentInScheduledReportsEmail`<sup>Optional</sup> <a name="IncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail"></a>

```go
IncludeContentInScheduledReportsEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}.

---

##### `IntercomAction`<sup>Optional</sup> <a name="IntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.intercomAction"></a>

```go
IntercomAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}.

---

##### `InvokeAppsAiInference`<sup>Optional</sup> <a name="InvokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.invokeAppsAiInference"></a>

```go
InvokeAppsAiInference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}.

---

##### `JiraAction`<sup>Optional</sup> <a name="JiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.jiraAction"></a>

```go
JiraAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}.

---

##### `KnowledgeBase`<sup>Optional</sup> <a name="KnowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.knowledgeBase"></a>

```go
KnowledgeBase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}.

---

##### `LinearAction`<sup>Optional</sup> <a name="LinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.linearAction"></a>

```go
LinearAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}.

---

##### `ManageSharedFolders`<sup>Optional</sup> <a name="ManageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.manageSharedFolders"></a>

```go
ManageSharedFolders *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}.

---

##### `McpAction`<sup>Optional</sup> <a name="McpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mcpAction"></a>

```go
McpAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}.

---

##### `MondayAction`<sup>Optional</sup> <a name="MondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mondayAction"></a>

```go
MondayAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}.

---

##### `MsExchangeAction`<sup>Optional</sup> <a name="MsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msExchangeAction"></a>

```go
MsExchangeAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}.

---

##### `MsTeamsAction`<sup>Optional</sup> <a name="MsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msTeamsAction"></a>

```go
MsTeamsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}.

---

##### `NewRelicAction`<sup>Optional</sup> <a name="NewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.newRelicAction"></a>

```go
NewRelicAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}.

---

##### `NotionAction`<sup>Optional</sup> <a name="NotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.notionAction"></a>

```go
NotionAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}.

---

##### `OneDriveAction`<sup>Optional</sup> <a name="OneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.oneDriveAction"></a>

```go
OneDriveAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}.

---

##### `OpenApiAction`<sup>Optional</sup> <a name="OpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.openApiAction"></a>

```go
OpenApiAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}.

---

##### `PagerDutyAction`<sup>Optional</sup> <a name="PagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.pagerDutyAction"></a>

```go
PagerDutyAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}.

---

##### `PerformFlowUiTask`<sup>Optional</sup> <a name="PerformFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.performFlowUiTask"></a>

```go
PerformFlowUiTask *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}.

---

##### `PrintReports`<sup>Optional</sup> <a name="PrintReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports"></a>

```go
PrintReports *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}.

---

##### `PublishWithoutApproval`<sup>Optional</sup> <a name="PublishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.publishWithoutApproval"></a>

```go
PublishWithoutApproval *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}.

---

##### `RenameSharedFolders`<sup>Optional</sup> <a name="RenameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders"></a>

```go
RenameSharedFolders *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}.

---

##### `Research`<sup>Optional</sup> <a name="Research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.research"></a>

```go
Research *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}.

---

##### `SalesforceAction`<sup>Optional</sup> <a name="SalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.salesforceAction"></a>

```go
SalesforceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}.

---

##### `SandPGlobalEnergyAction`<sup>Optional</sup> <a name="SandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPGlobalEnergyAction"></a>

```go
SandPGlobalEnergyAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}.

---

##### `SandPgmiAction`<sup>Optional</sup> <a name="SandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPgmiAction"></a>

```go
SandPgmiAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}.

---

##### `SapBillOfMaterialAction`<sup>Optional</sup> <a name="SapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBillOfMaterialAction"></a>

```go
SapBillOfMaterialAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}.

---

##### `SapBusinessPartnerAction`<sup>Optional</sup> <a name="SapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBusinessPartnerAction"></a>

```go
SapBusinessPartnerAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}.

---

##### `SapMaterialStockAction`<sup>Optional</sup> <a name="SapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapMaterialStockAction"></a>

```go
SapMaterialStockAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}.

---

##### `SapPhysicalInventoryAction`<sup>Optional</sup> <a name="SapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapPhysicalInventoryAction"></a>

```go
SapPhysicalInventoryAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}.

---

##### `SapProductMasterDataAction`<sup>Optional</sup> <a name="SapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapProductMasterDataAction"></a>

```go
SapProductMasterDataAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}.

---

##### `ServiceNowAction`<sup>Optional</sup> <a name="ServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.serviceNowAction"></a>

```go
ServiceNowAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}.

---

##### `ShareAmazonBedrockArsAction`<sup>Optional</sup> <a name="ShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockArsAction"></a>

```go
ShareAmazonBedrockArsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}.

---

##### `ShareAmazonBedrockFsAction`<sup>Optional</sup> <a name="ShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockFsAction"></a>

```go
ShareAmazonBedrockFsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}.

---

##### `ShareAmazonBedrockKrsAction`<sup>Optional</sup> <a name="ShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockKrsAction"></a>

```go
ShareAmazonBedrockKrsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}.

---

##### `ShareAmazonSThreeAction`<sup>Optional</sup> <a name="ShareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonSThreeAction"></a>

```go
ShareAmazonSThreeAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}.

---

##### `ShareAnalyses`<sup>Optional</sup> <a name="ShareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses"></a>

```go
ShareAnalyses *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}.

---

##### `ShareApps`<sup>Optional</sup> <a name="ShareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareApps"></a>

```go
ShareApps *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}.

---

##### `ShareAsanaAction`<sup>Optional</sup> <a name="ShareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAsanaAction"></a>

```go
ShareAsanaAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}.

---

##### `ShareBambooHrAction`<sup>Optional</sup> <a name="ShareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBambooHrAction"></a>

```go
ShareBambooHrAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}.

---

##### `ShareBoxAgentAction`<sup>Optional</sup> <a name="ShareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBoxAgentAction"></a>

```go
ShareBoxAgentAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}.

---

##### `ShareCanvaAgentAction`<sup>Optional</sup> <a name="ShareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareCanvaAgentAction"></a>

```go
ShareCanvaAgentAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}.

---

##### `ShareChatAgents`<sup>Optional</sup> <a name="ShareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareChatAgents"></a>

```go
ShareChatAgents *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}.

---

##### `ShareComprehendAction`<sup>Optional</sup> <a name="ShareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendAction"></a>

```go
ShareComprehendAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}.

---

##### `ShareComprehendMedicalAction`<sup>Optional</sup> <a name="ShareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendMedicalAction"></a>

```go
ShareComprehendMedicalAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}.

---

##### `ShareConfluenceAction`<sup>Optional</sup> <a name="ShareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareConfluenceAction"></a>

```go
ShareConfluenceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}.

---

##### `ShareDashboards`<sup>Optional</sup> <a name="ShareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards"></a>

```go
ShareDashboards *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}.

---

##### `ShareDatasets`<sup>Optional</sup> <a name="ShareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets"></a>

```go
ShareDatasets *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}.

---

##### `ShareDataSources`<sup>Optional</sup> <a name="ShareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources"></a>

```go
ShareDataSources *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}.

---

##### `ShareFactSetAction`<sup>Optional</sup> <a name="ShareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareFactSetAction"></a>

```go
ShareFactSetAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}.

---

##### `ShareGenericHttpAction`<sup>Optional</sup> <a name="ShareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGenericHttpAction"></a>

```go
ShareGenericHttpAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}.

---

##### `ShareGithubAction`<sup>Optional</sup> <a name="ShareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGithubAction"></a>

```go
ShareGithubAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}.

---

##### `ShareGoogleCalendarAction`<sup>Optional</sup> <a name="ShareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGoogleCalendarAction"></a>

```go
ShareGoogleCalendarAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}.

---

##### `ShareHubspotAction`<sup>Optional</sup> <a name="ShareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHubspotAction"></a>

```go
ShareHubspotAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}.

---

##### `ShareHuggingFaceAction`<sup>Optional</sup> <a name="ShareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHuggingFaceAction"></a>

```go
ShareHuggingFaceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}.

---

##### `ShareIntercomAction`<sup>Optional</sup> <a name="ShareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareIntercomAction"></a>

```go
ShareIntercomAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}.

---

##### `ShareJiraAction`<sup>Optional</sup> <a name="ShareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareJiraAction"></a>

```go
ShareJiraAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}.

---

##### `ShareKnowledgeBases`<sup>Optional</sup> <a name="ShareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareKnowledgeBases"></a>

```go
ShareKnowledgeBases *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}.

---

##### `ShareLinearAction`<sup>Optional</sup> <a name="ShareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareLinearAction"></a>

```go
ShareLinearAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}.

---

##### `ShareMcpAction`<sup>Optional</sup> <a name="ShareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMcpAction"></a>

```go
ShareMcpAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}.

---

##### `ShareMondayAction`<sup>Optional</sup> <a name="ShareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMondayAction"></a>

```go
ShareMondayAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}.

---

##### `ShareMsExchangeAction`<sup>Optional</sup> <a name="ShareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsExchangeAction"></a>

```go
ShareMsExchangeAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}.

---

##### `ShareMsTeamsAction`<sup>Optional</sup> <a name="ShareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsTeamsAction"></a>

```go
ShareMsTeamsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}.

---

##### `ShareNewRelicAction`<sup>Optional</sup> <a name="ShareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNewRelicAction"></a>

```go
ShareNewRelicAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}.

---

##### `ShareNotionAction`<sup>Optional</sup> <a name="ShareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNotionAction"></a>

```go
ShareNotionAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}.

---

##### `ShareOneDriveAction`<sup>Optional</sup> <a name="ShareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOneDriveAction"></a>

```go
ShareOneDriveAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}.

---

##### `ShareOpenApiAction`<sup>Optional</sup> <a name="ShareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOpenApiAction"></a>

```go
ShareOpenApiAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}.

---

##### `SharePagerDutyAction`<sup>Optional</sup> <a name="SharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePagerDutyAction"></a>

```go
SharePagerDutyAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}.

---

##### `SharePointAction`<sup>Optional</sup> <a name="SharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePointAction"></a>

```go
SharePointAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}.

---

##### `ShareSalesforceAction`<sup>Optional</sup> <a name="ShareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSalesforceAction"></a>

```go
ShareSalesforceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}.

---

##### `ShareSandPGlobalEnergyAction`<sup>Optional</sup> <a name="ShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPGlobalEnergyAction"></a>

```go
ShareSandPGlobalEnergyAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}.

---

##### `ShareSandPgmiAction`<sup>Optional</sup> <a name="ShareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPgmiAction"></a>

```go
ShareSandPgmiAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}.

---

##### `ShareSapBillOfMaterialAction`<sup>Optional</sup> <a name="ShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBillOfMaterialAction"></a>

```go
ShareSapBillOfMaterialAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}.

---

##### `ShareSapBusinessPartnerAction`<sup>Optional</sup> <a name="ShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBusinessPartnerAction"></a>

```go
ShareSapBusinessPartnerAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}.

---

##### `ShareSapMaterialStockAction`<sup>Optional</sup> <a name="ShareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapMaterialStockAction"></a>

```go
ShareSapMaterialStockAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}.

---

##### `ShareSapPhysicalInventoryAction`<sup>Optional</sup> <a name="ShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapPhysicalInventoryAction"></a>

```go
ShareSapPhysicalInventoryAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}.

---

##### `ShareSapProductMasterDataAction`<sup>Optional</sup> <a name="ShareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapProductMasterDataAction"></a>

```go
ShareSapProductMasterDataAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}.

---

##### `ShareServiceNowAction`<sup>Optional</sup> <a name="ShareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareServiceNowAction"></a>

```go
ShareServiceNowAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}.

---

##### `ShareSharePointAction`<sup>Optional</sup> <a name="ShareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSharePointAction"></a>

```go
ShareSharePointAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}.

---

##### `ShareSlackAction`<sup>Optional</sup> <a name="ShareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSlackAction"></a>

```go
ShareSlackAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}.

---

##### `ShareSmartsheetAction`<sup>Optional</sup> <a name="ShareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSmartsheetAction"></a>

```go
ShareSmartsheetAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}.

---

##### `ShareSpaces`<sup>Optional</sup> <a name="ShareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSpaces"></a>

```go
ShareSpaces *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}.

---

##### `ShareTextractAction`<sup>Optional</sup> <a name="ShareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareTextractAction"></a>

```go
ShareTextractAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}.

---

##### `ShareZendeskAction`<sup>Optional</sup> <a name="ShareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareZendeskAction"></a>

```go
ShareZendeskAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}.

---

##### `SlackAction`<sup>Optional</sup> <a name="SlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.slackAction"></a>

```go
SlackAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}.

---

##### `SmartsheetAction`<sup>Optional</sup> <a name="SmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.smartsheetAction"></a>

```go
SmartsheetAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}.

---

##### `Space`<sup>Optional</sup> <a name="Space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.space"></a>

```go
Space *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}.

---

##### `SubscribeDashboardEmailReports`<sup>Optional</sup> <a name="SubscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports"></a>

```go
SubscribeDashboardEmailReports *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}.

---

##### `TextractAction`<sup>Optional</sup> <a name="TextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.textractAction"></a>

```go
TextractAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}.

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}.

---

##### `UseAgentWebSearch`<sup>Optional</sup> <a name="UseAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAgentWebSearch"></a>

```go
UseAgentWebSearch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}.

---

##### `UseAmazonBedrockArsAction`<sup>Optional</sup> <a name="UseAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockArsAction"></a>

```go
UseAmazonBedrockArsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}.

---

##### `UseAmazonBedrockFsAction`<sup>Optional</sup> <a name="UseAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockFsAction"></a>

```go
UseAmazonBedrockFsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}.

---

##### `UseAmazonBedrockKrsAction`<sup>Optional</sup> <a name="UseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockKrsAction"></a>

```go
UseAmazonBedrockKrsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}.

---

##### `UseAmazonSThreeAction`<sup>Optional</sup> <a name="UseAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonSThreeAction"></a>

```go
UseAmazonSThreeAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}.

---

##### `UseAsanaAction`<sup>Optional</sup> <a name="UseAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAsanaAction"></a>

```go
UseAsanaAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}.

---

##### `UseBambooHrAction`<sup>Optional</sup> <a name="UseBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBambooHrAction"></a>

```go
UseBambooHrAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}.

---

##### `UseBedrockModels`<sup>Optional</sup> <a name="UseBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBedrockModels"></a>

```go
UseBedrockModels *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}.

---

##### `UseBoxAgentAction`<sup>Optional</sup> <a name="UseBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBoxAgentAction"></a>

```go
UseBoxAgentAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}.

---

##### `UseCanvaAgentAction`<sup>Optional</sup> <a name="UseCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useCanvaAgentAction"></a>

```go
UseCanvaAgentAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}.

---

##### `UseComprehendAction`<sup>Optional</sup> <a name="UseComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendAction"></a>

```go
UseComprehendAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}.

---

##### `UseComprehendMedicalAction`<sup>Optional</sup> <a name="UseComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendMedicalAction"></a>

```go
UseComprehendMedicalAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}.

---

##### `UseConfluenceAction`<sup>Optional</sup> <a name="UseConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useConfluenceAction"></a>

```go
UseConfluenceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}.

---

##### `UseFactSetAction`<sup>Optional</sup> <a name="UseFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useFactSetAction"></a>

```go
UseFactSetAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}.

---

##### `UseGenericHttpAction`<sup>Optional</sup> <a name="UseGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGenericHttpAction"></a>

```go
UseGenericHttpAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}.

---

##### `UseGithubAction`<sup>Optional</sup> <a name="UseGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGithubAction"></a>

```go
UseGithubAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}.

---

##### `UseGoogleCalendarAction`<sup>Optional</sup> <a name="UseGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGoogleCalendarAction"></a>

```go
UseGoogleCalendarAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}.

---

##### `UseHubspotAction`<sup>Optional</sup> <a name="UseHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHubspotAction"></a>

```go
UseHubspotAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}.

---

##### `UseHuggingFaceAction`<sup>Optional</sup> <a name="UseHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHuggingFaceAction"></a>

```go
UseHuggingFaceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}.

---

##### `UseIntercomAction`<sup>Optional</sup> <a name="UseIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useIntercomAction"></a>

```go
UseIntercomAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}.

---

##### `UseJiraAction`<sup>Optional</sup> <a name="UseJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useJiraAction"></a>

```go
UseJiraAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}.

---

##### `UseLinearAction`<sup>Optional</sup> <a name="UseLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useLinearAction"></a>

```go
UseLinearAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}.

---

##### `UseMcpAction`<sup>Optional</sup> <a name="UseMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMcpAction"></a>

```go
UseMcpAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}.

---

##### `UseMondayAction`<sup>Optional</sup> <a name="UseMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMondayAction"></a>

```go
UseMondayAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}.

---

##### `UseMsExchangeAction`<sup>Optional</sup> <a name="UseMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsExchangeAction"></a>

```go
UseMsExchangeAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}.

---

##### `UseMsTeamsAction`<sup>Optional</sup> <a name="UseMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsTeamsAction"></a>

```go
UseMsTeamsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}.

---

##### `UseNewRelicAction`<sup>Optional</sup> <a name="UseNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNewRelicAction"></a>

```go
UseNewRelicAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}.

---

##### `UseNotionAction`<sup>Optional</sup> <a name="UseNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNotionAction"></a>

```go
UseNotionAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}.

---

##### `UseOneDriveAction`<sup>Optional</sup> <a name="UseOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOneDriveAction"></a>

```go
UseOneDriveAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}.

---

##### `UseOpenApiAction`<sup>Optional</sup> <a name="UseOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOpenApiAction"></a>

```go
UseOpenApiAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}.

---

##### `UsePagerDutyAction`<sup>Optional</sup> <a name="UsePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.usePagerDutyAction"></a>

```go
UsePagerDutyAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}.

---

##### `UseSalesforceAction`<sup>Optional</sup> <a name="UseSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSalesforceAction"></a>

```go
UseSalesforceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}.

---

##### `UseSandPGlobalEnergyAction`<sup>Optional</sup> <a name="UseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPGlobalEnergyAction"></a>

```go
UseSandPGlobalEnergyAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}.

---

##### `UseSandPgmiAction`<sup>Optional</sup> <a name="UseSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPgmiAction"></a>

```go
UseSandPgmiAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}.

---

##### `UseSapBillOfMaterialAction`<sup>Optional</sup> <a name="UseSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBillOfMaterialAction"></a>

```go
UseSapBillOfMaterialAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}.

---

##### `UseSapBusinessPartnerAction`<sup>Optional</sup> <a name="UseSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBusinessPartnerAction"></a>

```go
UseSapBusinessPartnerAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}.

---

##### `UseSapMaterialStockAction`<sup>Optional</sup> <a name="UseSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapMaterialStockAction"></a>

```go
UseSapMaterialStockAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}.

---

##### `UseSapPhysicalInventoryAction`<sup>Optional</sup> <a name="UseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapPhysicalInventoryAction"></a>

```go
UseSapPhysicalInventoryAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}.

---

##### `UseSapProductMasterDataAction`<sup>Optional</sup> <a name="UseSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapProductMasterDataAction"></a>

```go
UseSapProductMasterDataAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}.

---

##### `UseServiceNowAction`<sup>Optional</sup> <a name="UseServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useServiceNowAction"></a>

```go
UseServiceNowAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}.

---

##### `UseSharePointAction`<sup>Optional</sup> <a name="UseSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSharePointAction"></a>

```go
UseSharePointAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}.

---

##### `UseSlackAction`<sup>Optional</sup> <a name="UseSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSlackAction"></a>

```go
UseSlackAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}.

---

##### `UseSmartsheetAction`<sup>Optional</sup> <a name="UseSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSmartsheetAction"></a>

```go
UseSmartsheetAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}.

---

##### `UseTextractAction`<sup>Optional</sup> <a name="UseTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useTextractAction"></a>

```go
UseTextractAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}.

---

##### `UseZendeskAction`<sup>Optional</sup> <a name="UseZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useZendeskAction"></a>

```go
UseZendeskAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}.

---

##### `ViewAccountSpiceCapacity`<sup>Optional</sup> <a name="ViewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity"></a>

```go
ViewAccountSpiceCapacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}.

---

##### `ZendeskAction`<sup>Optional</sup> <a name="ZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.zendeskAction"></a>

```go
ZendeskAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}.

---

### QuicksightCustomPermissionsConfig <a name="QuicksightCustomPermissionsConfig" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

&quicksightcustompermissions.QuicksightCustomPermissionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AwsAccountId: *string,
	CustomPermissionsName: *string,
	Capabilities: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName">CustomPermissionsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}.

---

##### `CustomPermissionsName`<sup>Required</sup> <a name="CustomPermissionsName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName"></a>

```go
CustomPermissionsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}.

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities"></a>

```go
Capabilities QuicksightCustomPermissionsCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}.

---

### QuicksightCustomPermissionsTags <a name="QuicksightCustomPermissionsTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

&quicksightcustompermissions.QuicksightCustomPermissionsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.key">Key</a></code> | <code>*string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.value">Value</a></code> | <code>*string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#key QuicksightCustomPermissions#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#value QuicksightCustomPermissions#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightCustomPermissionsCapabilitiesOutputReference <a name="QuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

quicksightcustompermissions.NewQuicksightCustomPermissionsCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightCustomPermissionsCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAccessAppsNativeDataStore">ResetAccessAppsNativeDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses">ResetAddOrRunAnomalyDetectionForAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockArsAction">ResetAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockFsAction">ResetAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockKrsAction">ResetAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonSThreeAction">ResetAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAnalysis">ResetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApproveFlowShareRequests">ResetApproveFlowShareRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApps">ResetApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAsanaAction">ResetAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAutomate">ResetAutomate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBambooHrAction">ResetBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBoxAgentAction">ResetBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBuildCalculatedFieldWithQ">ResetBuildCalculatedFieldWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCanvaAgentAction">ResetCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetChatAgent">ResetChatAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendAction">ResetComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendMedicalAction">ResetComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetConfluenceAction">ResetConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockArsAction">ResetCreateAndUpdateAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockFsAction">ResetCreateAndUpdateAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockKrsAction">ResetCreateAndUpdateAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonSThreeAction">ResetCreateAndUpdateAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateApps">ResetCreateAndUpdateApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAsanaAction">ResetCreateAndUpdateAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBambooHrAction">ResetCreateAndUpdateBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBoxAgentAction">ResetCreateAndUpdateBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateCanvaAgentAction">ResetCreateAndUpdateCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendAction">ResetCreateAndUpdateComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendMedicalAction">ResetCreateAndUpdateComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateConfluenceAction">ResetCreateAndUpdateConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports">ResetCreateAndUpdateDashboardEmailReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets">ResetCreateAndUpdateDatasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources">ResetCreateAndUpdateDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateFactSetAction">ResetCreateAndUpdateFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGenericHttpAction">ResetCreateAndUpdateGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGithubAction">ResetCreateAndUpdateGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGoogleCalendarAction">ResetCreateAndUpdateGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHubspotAction">ResetCreateAndUpdateHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHuggingFaceAction">ResetCreateAndUpdateHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateIntercomAction">ResetCreateAndUpdateIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateJiraAction">ResetCreateAndUpdateJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateKnowledgeBases">ResetCreateAndUpdateKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateLinearAction">ResetCreateAndUpdateLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMcpAction">ResetCreateAndUpdateMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMondayAction">ResetCreateAndUpdateMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsExchangeAction">ResetCreateAndUpdateMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsTeamsAction">ResetCreateAndUpdateMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNewRelicAction">ResetCreateAndUpdateNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNotionAction">ResetCreateAndUpdateNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOneDriveAction">ResetCreateAndUpdateOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOpenApiAction">ResetCreateAndUpdateOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdatePagerDutyAction">ResetCreateAndUpdatePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSalesforceAction">ResetCreateAndUpdateSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPGlobalEnergyAction">ResetCreateAndUpdateSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPgmiAction">ResetCreateAndUpdateSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBillOfMaterialAction">ResetCreateAndUpdateSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBusinessPartnerAction">ResetCreateAndUpdateSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapMaterialStockAction">ResetCreateAndUpdateSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapPhysicalInventoryAction">ResetCreateAndUpdateSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapProductMasterDataAction">ResetCreateAndUpdateSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateServiceNowAction">ResetCreateAndUpdateServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSharePointAction">ResetCreateAndUpdateSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSlackAction">ResetCreateAndUpdateSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSmartsheetAction">ResetCreateAndUpdateSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateTextractAction">ResetCreateAndUpdateTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes">ResetCreateAndUpdateThemes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts">ResetCreateAndUpdateThresholdAlerts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateZendeskAction">ResetCreateAndUpdateZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateChatAgents">ResetCreateChatAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateDashboardExecutiveSummaryWithQ">ResetCreateDashboardExecutiveSummaryWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders">ResetCreateSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpaces">ResetCreateSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset">ResetCreateSpiceDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetDashboard">ResetDashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetEditVisualWithQ">ResetEditVisualWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv">ResetExportToCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports">ResetExportToCsvInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel">ResetExportToExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports">ResetExportToExcelInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf">ResetExportToPdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports">ResetExportToPdfInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFactSetAction">ResetFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFlow">ResetFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGenericHttpAction">ResetGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGithubAction">ResetGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGoogleCalendarAction">ResetGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHubspotAction">ResetHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHuggingFaceAction">ResetHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail">ResetIncludeContentInScheduledReportsEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIntercomAction">ResetIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetInvokeAppsAiInference">ResetInvokeAppsAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetJiraAction">ResetJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetKnowledgeBase">ResetKnowledgeBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetLinearAction">ResetLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetManageSharedFolders">ResetManageSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMcpAction">ResetMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMondayAction">ResetMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsExchangeAction">ResetMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsTeamsAction">ResetMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNewRelicAction">ResetNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNotionAction">ResetNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOneDriveAction">ResetOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOpenApiAction">ResetOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPagerDutyAction">ResetPagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPerformFlowUiTask">ResetPerformFlowUiTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports">ResetPrintReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPublishWithoutApproval">ResetPublishWithoutApproval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders">ResetRenameSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetResearch">ResetResearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSalesforceAction">ResetSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPGlobalEnergyAction">ResetSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPgmiAction">ResetSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBillOfMaterialAction">ResetSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBusinessPartnerAction">ResetSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapMaterialStockAction">ResetSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapPhysicalInventoryAction">ResetSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapProductMasterDataAction">ResetSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetServiceNowAction">ResetServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockArsAction">ResetShareAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockFsAction">ResetShareAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockKrsAction">ResetShareAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonSThreeAction">ResetShareAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses">ResetShareAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareApps">ResetShareApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAsanaAction">ResetShareAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBambooHrAction">ResetShareBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBoxAgentAction">ResetShareBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareCanvaAgentAction">ResetShareCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareChatAgents">ResetShareChatAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendAction">ResetShareComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendMedicalAction">ResetShareComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareConfluenceAction">ResetShareConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards">ResetShareDashboards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets">ResetShareDatasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources">ResetShareDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareFactSetAction">ResetShareFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGenericHttpAction">ResetShareGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGithubAction">ResetShareGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGoogleCalendarAction">ResetShareGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHubspotAction">ResetShareHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHuggingFaceAction">ResetShareHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareIntercomAction">ResetShareIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareJiraAction">ResetShareJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareKnowledgeBases">ResetShareKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareLinearAction">ResetShareLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMcpAction">ResetShareMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMondayAction">ResetShareMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsExchangeAction">ResetShareMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsTeamsAction">ResetShareMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNewRelicAction">ResetShareNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNotionAction">ResetShareNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOneDriveAction">ResetShareOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOpenApiAction">ResetShareOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePagerDutyAction">ResetSharePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePointAction">ResetSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSalesforceAction">ResetShareSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPGlobalEnergyAction">ResetShareSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPgmiAction">ResetShareSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBillOfMaterialAction">ResetShareSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBusinessPartnerAction">ResetShareSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapMaterialStockAction">ResetShareSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapPhysicalInventoryAction">ResetShareSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapProductMasterDataAction">ResetShareSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareServiceNowAction">ResetShareServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSharePointAction">ResetShareSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSlackAction">ResetShareSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSmartsheetAction">ResetShareSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSpaces">ResetShareSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareTextractAction">ResetShareTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareZendeskAction">ResetShareZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSlackAction">ResetSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSmartsheetAction">ResetSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSpace">ResetSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports">ResetSubscribeDashboardEmailReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTextractAction">ResetTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAgentWebSearch">ResetUseAgentWebSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockArsAction">ResetUseAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockFsAction">ResetUseAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockKrsAction">ResetUseAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonSThreeAction">ResetUseAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAsanaAction">ResetUseAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBambooHrAction">ResetUseBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBedrockModels">ResetUseBedrockModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBoxAgentAction">ResetUseBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseCanvaAgentAction">ResetUseCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendAction">ResetUseComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendMedicalAction">ResetUseComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseConfluenceAction">ResetUseConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseFactSetAction">ResetUseFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGenericHttpAction">ResetUseGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGithubAction">ResetUseGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGoogleCalendarAction">ResetUseGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHubspotAction">ResetUseHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHuggingFaceAction">ResetUseHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseIntercomAction">ResetUseIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseJiraAction">ResetUseJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseLinearAction">ResetUseLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMcpAction">ResetUseMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMondayAction">ResetUseMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsExchangeAction">ResetUseMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsTeamsAction">ResetUseMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNewRelicAction">ResetUseNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNotionAction">ResetUseNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOneDriveAction">ResetUseOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOpenApiAction">ResetUseOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUsePagerDutyAction">ResetUsePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSalesforceAction">ResetUseSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPGlobalEnergyAction">ResetUseSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPgmiAction">ResetUseSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBillOfMaterialAction">ResetUseSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBusinessPartnerAction">ResetUseSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapMaterialStockAction">ResetUseSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapPhysicalInventoryAction">ResetUseSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapProductMasterDataAction">ResetUseSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseServiceNowAction">ResetUseServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSharePointAction">ResetUseSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSlackAction">ResetUseSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSmartsheetAction">ResetUseSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseTextractAction">ResetUseTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseZendeskAction">ResetUseZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity">ResetViewAccountSpiceCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetZendeskAction">ResetZendeskAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessAppsNativeDataStore` <a name="ResetAccessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAccessAppsNativeDataStore"></a>

```go
func ResetAccessAppsNativeDataStore()
```

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetAddOrRunAnomalyDetectionForAnalyses` <a name="ResetAddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses"></a>

```go
func ResetAddOrRunAnomalyDetectionForAnalyses()
```

##### `ResetAmazonBedrockArsAction` <a name="ResetAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockArsAction"></a>

```go
func ResetAmazonBedrockArsAction()
```

##### `ResetAmazonBedrockFsAction` <a name="ResetAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockFsAction"></a>

```go
func ResetAmazonBedrockFsAction()
```

##### `ResetAmazonBedrockKrsAction` <a name="ResetAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockKrsAction"></a>

```go
func ResetAmazonBedrockKrsAction()
```

##### `ResetAmazonSThreeAction` <a name="ResetAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonSThreeAction"></a>

```go
func ResetAmazonSThreeAction()
```

##### `ResetAnalysis` <a name="ResetAnalysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAnalysis"></a>

```go
func ResetAnalysis()
```

##### `ResetApproveFlowShareRequests` <a name="ResetApproveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApproveFlowShareRequests"></a>

```go
func ResetApproveFlowShareRequests()
```

##### `ResetApps` <a name="ResetApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApps"></a>

```go
func ResetApps()
```

##### `ResetAsanaAction` <a name="ResetAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAsanaAction"></a>

```go
func ResetAsanaAction()
```

##### `ResetAutomate` <a name="ResetAutomate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAutomate"></a>

```go
func ResetAutomate()
```

##### `ResetBambooHrAction` <a name="ResetBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBambooHrAction"></a>

```go
func ResetBambooHrAction()
```

##### `ResetBoxAgentAction` <a name="ResetBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBoxAgentAction"></a>

```go
func ResetBoxAgentAction()
```

##### `ResetBuildCalculatedFieldWithQ` <a name="ResetBuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBuildCalculatedFieldWithQ"></a>

```go
func ResetBuildCalculatedFieldWithQ()
```

##### `ResetCanvaAgentAction` <a name="ResetCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCanvaAgentAction"></a>

```go
func ResetCanvaAgentAction()
```

##### `ResetChatAgent` <a name="ResetChatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetChatAgent"></a>

```go
func ResetChatAgent()
```

##### `ResetComprehendAction` <a name="ResetComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendAction"></a>

```go
func ResetComprehendAction()
```

##### `ResetComprehendMedicalAction` <a name="ResetComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendMedicalAction"></a>

```go
func ResetComprehendMedicalAction()
```

##### `ResetConfluenceAction` <a name="ResetConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetConfluenceAction"></a>

```go
func ResetConfluenceAction()
```

##### `ResetCreateAndUpdateAmazonBedrockArsAction` <a name="ResetCreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockArsAction"></a>

```go
func ResetCreateAndUpdateAmazonBedrockArsAction()
```

##### `ResetCreateAndUpdateAmazonBedrockFsAction` <a name="ResetCreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockFsAction"></a>

```go
func ResetCreateAndUpdateAmazonBedrockFsAction()
```

##### `ResetCreateAndUpdateAmazonBedrockKrsAction` <a name="ResetCreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockKrsAction"></a>

```go
func ResetCreateAndUpdateAmazonBedrockKrsAction()
```

##### `ResetCreateAndUpdateAmazonSThreeAction` <a name="ResetCreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonSThreeAction"></a>

```go
func ResetCreateAndUpdateAmazonSThreeAction()
```

##### `ResetCreateAndUpdateApps` <a name="ResetCreateAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateApps"></a>

```go
func ResetCreateAndUpdateApps()
```

##### `ResetCreateAndUpdateAsanaAction` <a name="ResetCreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAsanaAction"></a>

```go
func ResetCreateAndUpdateAsanaAction()
```

##### `ResetCreateAndUpdateBambooHrAction` <a name="ResetCreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBambooHrAction"></a>

```go
func ResetCreateAndUpdateBambooHrAction()
```

##### `ResetCreateAndUpdateBoxAgentAction` <a name="ResetCreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBoxAgentAction"></a>

```go
func ResetCreateAndUpdateBoxAgentAction()
```

##### `ResetCreateAndUpdateCanvaAgentAction` <a name="ResetCreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateCanvaAgentAction"></a>

```go
func ResetCreateAndUpdateCanvaAgentAction()
```

##### `ResetCreateAndUpdateComprehendAction` <a name="ResetCreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendAction"></a>

```go
func ResetCreateAndUpdateComprehendAction()
```

##### `ResetCreateAndUpdateComprehendMedicalAction` <a name="ResetCreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendMedicalAction"></a>

```go
func ResetCreateAndUpdateComprehendMedicalAction()
```

##### `ResetCreateAndUpdateConfluenceAction` <a name="ResetCreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateConfluenceAction"></a>

```go
func ResetCreateAndUpdateConfluenceAction()
```

##### `ResetCreateAndUpdateDashboardEmailReports` <a name="ResetCreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports"></a>

```go
func ResetCreateAndUpdateDashboardEmailReports()
```

##### `ResetCreateAndUpdateDatasets` <a name="ResetCreateAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets"></a>

```go
func ResetCreateAndUpdateDatasets()
```

##### `ResetCreateAndUpdateDataSources` <a name="ResetCreateAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources"></a>

```go
func ResetCreateAndUpdateDataSources()
```

##### `ResetCreateAndUpdateFactSetAction` <a name="ResetCreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateFactSetAction"></a>

```go
func ResetCreateAndUpdateFactSetAction()
```

##### `ResetCreateAndUpdateGenericHttpAction` <a name="ResetCreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGenericHttpAction"></a>

```go
func ResetCreateAndUpdateGenericHttpAction()
```

##### `ResetCreateAndUpdateGithubAction` <a name="ResetCreateAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGithubAction"></a>

```go
func ResetCreateAndUpdateGithubAction()
```

##### `ResetCreateAndUpdateGoogleCalendarAction` <a name="ResetCreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGoogleCalendarAction"></a>

```go
func ResetCreateAndUpdateGoogleCalendarAction()
```

##### `ResetCreateAndUpdateHubspotAction` <a name="ResetCreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHubspotAction"></a>

```go
func ResetCreateAndUpdateHubspotAction()
```

##### `ResetCreateAndUpdateHuggingFaceAction` <a name="ResetCreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHuggingFaceAction"></a>

```go
func ResetCreateAndUpdateHuggingFaceAction()
```

##### `ResetCreateAndUpdateIntercomAction` <a name="ResetCreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateIntercomAction"></a>

```go
func ResetCreateAndUpdateIntercomAction()
```

##### `ResetCreateAndUpdateJiraAction` <a name="ResetCreateAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateJiraAction"></a>

```go
func ResetCreateAndUpdateJiraAction()
```

##### `ResetCreateAndUpdateKnowledgeBases` <a name="ResetCreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateKnowledgeBases"></a>

```go
func ResetCreateAndUpdateKnowledgeBases()
```

##### `ResetCreateAndUpdateLinearAction` <a name="ResetCreateAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateLinearAction"></a>

```go
func ResetCreateAndUpdateLinearAction()
```

##### `ResetCreateAndUpdateMcpAction` <a name="ResetCreateAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMcpAction"></a>

```go
func ResetCreateAndUpdateMcpAction()
```

##### `ResetCreateAndUpdateMondayAction` <a name="ResetCreateAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMondayAction"></a>

```go
func ResetCreateAndUpdateMondayAction()
```

##### `ResetCreateAndUpdateMsExchangeAction` <a name="ResetCreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsExchangeAction"></a>

```go
func ResetCreateAndUpdateMsExchangeAction()
```

##### `ResetCreateAndUpdateMsTeamsAction` <a name="ResetCreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsTeamsAction"></a>

```go
func ResetCreateAndUpdateMsTeamsAction()
```

##### `ResetCreateAndUpdateNewRelicAction` <a name="ResetCreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNewRelicAction"></a>

```go
func ResetCreateAndUpdateNewRelicAction()
```

##### `ResetCreateAndUpdateNotionAction` <a name="ResetCreateAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNotionAction"></a>

```go
func ResetCreateAndUpdateNotionAction()
```

##### `ResetCreateAndUpdateOneDriveAction` <a name="ResetCreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOneDriveAction"></a>

```go
func ResetCreateAndUpdateOneDriveAction()
```

##### `ResetCreateAndUpdateOpenApiAction` <a name="ResetCreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOpenApiAction"></a>

```go
func ResetCreateAndUpdateOpenApiAction()
```

##### `ResetCreateAndUpdatePagerDutyAction` <a name="ResetCreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdatePagerDutyAction"></a>

```go
func ResetCreateAndUpdatePagerDutyAction()
```

##### `ResetCreateAndUpdateSalesforceAction` <a name="ResetCreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSalesforceAction"></a>

```go
func ResetCreateAndUpdateSalesforceAction()
```

##### `ResetCreateAndUpdateSandPGlobalEnergyAction` <a name="ResetCreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPGlobalEnergyAction"></a>

```go
func ResetCreateAndUpdateSandPGlobalEnergyAction()
```

##### `ResetCreateAndUpdateSandPgmiAction` <a name="ResetCreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPgmiAction"></a>

```go
func ResetCreateAndUpdateSandPgmiAction()
```

##### `ResetCreateAndUpdateSapBillOfMaterialAction` <a name="ResetCreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBillOfMaterialAction"></a>

```go
func ResetCreateAndUpdateSapBillOfMaterialAction()
```

##### `ResetCreateAndUpdateSapBusinessPartnerAction` <a name="ResetCreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBusinessPartnerAction"></a>

```go
func ResetCreateAndUpdateSapBusinessPartnerAction()
```

##### `ResetCreateAndUpdateSapMaterialStockAction` <a name="ResetCreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapMaterialStockAction"></a>

```go
func ResetCreateAndUpdateSapMaterialStockAction()
```

##### `ResetCreateAndUpdateSapPhysicalInventoryAction` <a name="ResetCreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapPhysicalInventoryAction"></a>

```go
func ResetCreateAndUpdateSapPhysicalInventoryAction()
```

##### `ResetCreateAndUpdateSapProductMasterDataAction` <a name="ResetCreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapProductMasterDataAction"></a>

```go
func ResetCreateAndUpdateSapProductMasterDataAction()
```

##### `ResetCreateAndUpdateServiceNowAction` <a name="ResetCreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateServiceNowAction"></a>

```go
func ResetCreateAndUpdateServiceNowAction()
```

##### `ResetCreateAndUpdateSharePointAction` <a name="ResetCreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSharePointAction"></a>

```go
func ResetCreateAndUpdateSharePointAction()
```

##### `ResetCreateAndUpdateSlackAction` <a name="ResetCreateAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSlackAction"></a>

```go
func ResetCreateAndUpdateSlackAction()
```

##### `ResetCreateAndUpdateSmartsheetAction` <a name="ResetCreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSmartsheetAction"></a>

```go
func ResetCreateAndUpdateSmartsheetAction()
```

##### `ResetCreateAndUpdateTextractAction` <a name="ResetCreateAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateTextractAction"></a>

```go
func ResetCreateAndUpdateTextractAction()
```

##### `ResetCreateAndUpdateThemes` <a name="ResetCreateAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes"></a>

```go
func ResetCreateAndUpdateThemes()
```

##### `ResetCreateAndUpdateThresholdAlerts` <a name="ResetCreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts"></a>

```go
func ResetCreateAndUpdateThresholdAlerts()
```

##### `ResetCreateAndUpdateZendeskAction` <a name="ResetCreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateZendeskAction"></a>

```go
func ResetCreateAndUpdateZendeskAction()
```

##### `ResetCreateChatAgents` <a name="ResetCreateChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateChatAgents"></a>

```go
func ResetCreateChatAgents()
```

##### `ResetCreateDashboardExecutiveSummaryWithQ` <a name="ResetCreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateDashboardExecutiveSummaryWithQ"></a>

```go
func ResetCreateDashboardExecutiveSummaryWithQ()
```

##### `ResetCreateSharedFolders` <a name="ResetCreateSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders"></a>

```go
func ResetCreateSharedFolders()
```

##### `ResetCreateSpaces` <a name="ResetCreateSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpaces"></a>

```go
func ResetCreateSpaces()
```

##### `ResetCreateSpiceDataset` <a name="ResetCreateSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset"></a>

```go
func ResetCreateSpiceDataset()
```

##### `ResetDashboard` <a name="ResetDashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetDashboard"></a>

```go
func ResetDashboard()
```

##### `ResetEditVisualWithQ` <a name="ResetEditVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetEditVisualWithQ"></a>

```go
func ResetEditVisualWithQ()
```

##### `ResetExportToCsv` <a name="ResetExportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv"></a>

```go
func ResetExportToCsv()
```

##### `ResetExportToCsvInScheduledReports` <a name="ResetExportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports"></a>

```go
func ResetExportToCsvInScheduledReports()
```

##### `ResetExportToExcel` <a name="ResetExportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel"></a>

```go
func ResetExportToExcel()
```

##### `ResetExportToExcelInScheduledReports` <a name="ResetExportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports"></a>

```go
func ResetExportToExcelInScheduledReports()
```

##### `ResetExportToPdf` <a name="ResetExportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf"></a>

```go
func ResetExportToPdf()
```

##### `ResetExportToPdfInScheduledReports` <a name="ResetExportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports"></a>

```go
func ResetExportToPdfInScheduledReports()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExtension"></a>

```go
func ResetExtension()
```

##### `ResetFactSetAction` <a name="ResetFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFactSetAction"></a>

```go
func ResetFactSetAction()
```

##### `ResetFlow` <a name="ResetFlow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFlow"></a>

```go
func ResetFlow()
```

##### `ResetGenericHttpAction` <a name="ResetGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGenericHttpAction"></a>

```go
func ResetGenericHttpAction()
```

##### `ResetGithubAction` <a name="ResetGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGithubAction"></a>

```go
func ResetGithubAction()
```

##### `ResetGoogleCalendarAction` <a name="ResetGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGoogleCalendarAction"></a>

```go
func ResetGoogleCalendarAction()
```

##### `ResetHubspotAction` <a name="ResetHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHubspotAction"></a>

```go
func ResetHubspotAction()
```

##### `ResetHuggingFaceAction` <a name="ResetHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHuggingFaceAction"></a>

```go
func ResetHuggingFaceAction()
```

##### `ResetIncludeContentInScheduledReportsEmail` <a name="ResetIncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail"></a>

```go
func ResetIncludeContentInScheduledReportsEmail()
```

##### `ResetIntercomAction` <a name="ResetIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIntercomAction"></a>

```go
func ResetIntercomAction()
```

##### `ResetInvokeAppsAiInference` <a name="ResetInvokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetInvokeAppsAiInference"></a>

```go
func ResetInvokeAppsAiInference()
```

##### `ResetJiraAction` <a name="ResetJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetJiraAction"></a>

```go
func ResetJiraAction()
```

##### `ResetKnowledgeBase` <a name="ResetKnowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetKnowledgeBase"></a>

```go
func ResetKnowledgeBase()
```

##### `ResetLinearAction` <a name="ResetLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetLinearAction"></a>

```go
func ResetLinearAction()
```

##### `ResetManageSharedFolders` <a name="ResetManageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetManageSharedFolders"></a>

```go
func ResetManageSharedFolders()
```

##### `ResetMcpAction` <a name="ResetMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMcpAction"></a>

```go
func ResetMcpAction()
```

##### `ResetMondayAction` <a name="ResetMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMondayAction"></a>

```go
func ResetMondayAction()
```

##### `ResetMsExchangeAction` <a name="ResetMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsExchangeAction"></a>

```go
func ResetMsExchangeAction()
```

##### `ResetMsTeamsAction` <a name="ResetMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsTeamsAction"></a>

```go
func ResetMsTeamsAction()
```

##### `ResetNewRelicAction` <a name="ResetNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNewRelicAction"></a>

```go
func ResetNewRelicAction()
```

##### `ResetNotionAction` <a name="ResetNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNotionAction"></a>

```go
func ResetNotionAction()
```

##### `ResetOneDriveAction` <a name="ResetOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOneDriveAction"></a>

```go
func ResetOneDriveAction()
```

##### `ResetOpenApiAction` <a name="ResetOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOpenApiAction"></a>

```go
func ResetOpenApiAction()
```

##### `ResetPagerDutyAction` <a name="ResetPagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPagerDutyAction"></a>

```go
func ResetPagerDutyAction()
```

##### `ResetPerformFlowUiTask` <a name="ResetPerformFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPerformFlowUiTask"></a>

```go
func ResetPerformFlowUiTask()
```

##### `ResetPrintReports` <a name="ResetPrintReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports"></a>

```go
func ResetPrintReports()
```

##### `ResetPublishWithoutApproval` <a name="ResetPublishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPublishWithoutApproval"></a>

```go
func ResetPublishWithoutApproval()
```

##### `ResetRenameSharedFolders` <a name="ResetRenameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders"></a>

```go
func ResetRenameSharedFolders()
```

##### `ResetResearch` <a name="ResetResearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetResearch"></a>

```go
func ResetResearch()
```

##### `ResetSalesforceAction` <a name="ResetSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSalesforceAction"></a>

```go
func ResetSalesforceAction()
```

##### `ResetSandPGlobalEnergyAction` <a name="ResetSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPGlobalEnergyAction"></a>

```go
func ResetSandPGlobalEnergyAction()
```

##### `ResetSandPgmiAction` <a name="ResetSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPgmiAction"></a>

```go
func ResetSandPgmiAction()
```

##### `ResetSapBillOfMaterialAction` <a name="ResetSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBillOfMaterialAction"></a>

```go
func ResetSapBillOfMaterialAction()
```

##### `ResetSapBusinessPartnerAction` <a name="ResetSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBusinessPartnerAction"></a>

```go
func ResetSapBusinessPartnerAction()
```

##### `ResetSapMaterialStockAction` <a name="ResetSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapMaterialStockAction"></a>

```go
func ResetSapMaterialStockAction()
```

##### `ResetSapPhysicalInventoryAction` <a name="ResetSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapPhysicalInventoryAction"></a>

```go
func ResetSapPhysicalInventoryAction()
```

##### `ResetSapProductMasterDataAction` <a name="ResetSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapProductMasterDataAction"></a>

```go
func ResetSapProductMasterDataAction()
```

##### `ResetServiceNowAction` <a name="ResetServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetServiceNowAction"></a>

```go
func ResetServiceNowAction()
```

##### `ResetShareAmazonBedrockArsAction` <a name="ResetShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockArsAction"></a>

```go
func ResetShareAmazonBedrockArsAction()
```

##### `ResetShareAmazonBedrockFsAction` <a name="ResetShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockFsAction"></a>

```go
func ResetShareAmazonBedrockFsAction()
```

##### `ResetShareAmazonBedrockKrsAction` <a name="ResetShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockKrsAction"></a>

```go
func ResetShareAmazonBedrockKrsAction()
```

##### `ResetShareAmazonSThreeAction` <a name="ResetShareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonSThreeAction"></a>

```go
func ResetShareAmazonSThreeAction()
```

##### `ResetShareAnalyses` <a name="ResetShareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses"></a>

```go
func ResetShareAnalyses()
```

##### `ResetShareApps` <a name="ResetShareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareApps"></a>

```go
func ResetShareApps()
```

##### `ResetShareAsanaAction` <a name="ResetShareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAsanaAction"></a>

```go
func ResetShareAsanaAction()
```

##### `ResetShareBambooHrAction` <a name="ResetShareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBambooHrAction"></a>

```go
func ResetShareBambooHrAction()
```

##### `ResetShareBoxAgentAction` <a name="ResetShareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBoxAgentAction"></a>

```go
func ResetShareBoxAgentAction()
```

##### `ResetShareCanvaAgentAction` <a name="ResetShareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareCanvaAgentAction"></a>

```go
func ResetShareCanvaAgentAction()
```

##### `ResetShareChatAgents` <a name="ResetShareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareChatAgents"></a>

```go
func ResetShareChatAgents()
```

##### `ResetShareComprehendAction` <a name="ResetShareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendAction"></a>

```go
func ResetShareComprehendAction()
```

##### `ResetShareComprehendMedicalAction` <a name="ResetShareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendMedicalAction"></a>

```go
func ResetShareComprehendMedicalAction()
```

##### `ResetShareConfluenceAction` <a name="ResetShareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareConfluenceAction"></a>

```go
func ResetShareConfluenceAction()
```

##### `ResetShareDashboards` <a name="ResetShareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards"></a>

```go
func ResetShareDashboards()
```

##### `ResetShareDatasets` <a name="ResetShareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets"></a>

```go
func ResetShareDatasets()
```

##### `ResetShareDataSources` <a name="ResetShareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources"></a>

```go
func ResetShareDataSources()
```

##### `ResetShareFactSetAction` <a name="ResetShareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareFactSetAction"></a>

```go
func ResetShareFactSetAction()
```

##### `ResetShareGenericHttpAction` <a name="ResetShareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGenericHttpAction"></a>

```go
func ResetShareGenericHttpAction()
```

##### `ResetShareGithubAction` <a name="ResetShareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGithubAction"></a>

```go
func ResetShareGithubAction()
```

##### `ResetShareGoogleCalendarAction` <a name="ResetShareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGoogleCalendarAction"></a>

```go
func ResetShareGoogleCalendarAction()
```

##### `ResetShareHubspotAction` <a name="ResetShareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHubspotAction"></a>

```go
func ResetShareHubspotAction()
```

##### `ResetShareHuggingFaceAction` <a name="ResetShareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHuggingFaceAction"></a>

```go
func ResetShareHuggingFaceAction()
```

##### `ResetShareIntercomAction` <a name="ResetShareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareIntercomAction"></a>

```go
func ResetShareIntercomAction()
```

##### `ResetShareJiraAction` <a name="ResetShareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareJiraAction"></a>

```go
func ResetShareJiraAction()
```

##### `ResetShareKnowledgeBases` <a name="ResetShareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareKnowledgeBases"></a>

```go
func ResetShareKnowledgeBases()
```

##### `ResetShareLinearAction` <a name="ResetShareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareLinearAction"></a>

```go
func ResetShareLinearAction()
```

##### `ResetShareMcpAction` <a name="ResetShareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMcpAction"></a>

```go
func ResetShareMcpAction()
```

##### `ResetShareMondayAction` <a name="ResetShareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMondayAction"></a>

```go
func ResetShareMondayAction()
```

##### `ResetShareMsExchangeAction` <a name="ResetShareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsExchangeAction"></a>

```go
func ResetShareMsExchangeAction()
```

##### `ResetShareMsTeamsAction` <a name="ResetShareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsTeamsAction"></a>

```go
func ResetShareMsTeamsAction()
```

##### `ResetShareNewRelicAction` <a name="ResetShareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNewRelicAction"></a>

```go
func ResetShareNewRelicAction()
```

##### `ResetShareNotionAction` <a name="ResetShareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNotionAction"></a>

```go
func ResetShareNotionAction()
```

##### `ResetShareOneDriveAction` <a name="ResetShareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOneDriveAction"></a>

```go
func ResetShareOneDriveAction()
```

##### `ResetShareOpenApiAction` <a name="ResetShareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOpenApiAction"></a>

```go
func ResetShareOpenApiAction()
```

##### `ResetSharePagerDutyAction` <a name="ResetSharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePagerDutyAction"></a>

```go
func ResetSharePagerDutyAction()
```

##### `ResetSharePointAction` <a name="ResetSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePointAction"></a>

```go
func ResetSharePointAction()
```

##### `ResetShareSalesforceAction` <a name="ResetShareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSalesforceAction"></a>

```go
func ResetShareSalesforceAction()
```

##### `ResetShareSandPGlobalEnergyAction` <a name="ResetShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPGlobalEnergyAction"></a>

```go
func ResetShareSandPGlobalEnergyAction()
```

##### `ResetShareSandPgmiAction` <a name="ResetShareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPgmiAction"></a>

```go
func ResetShareSandPgmiAction()
```

##### `ResetShareSapBillOfMaterialAction` <a name="ResetShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBillOfMaterialAction"></a>

```go
func ResetShareSapBillOfMaterialAction()
```

##### `ResetShareSapBusinessPartnerAction` <a name="ResetShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBusinessPartnerAction"></a>

```go
func ResetShareSapBusinessPartnerAction()
```

##### `ResetShareSapMaterialStockAction` <a name="ResetShareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapMaterialStockAction"></a>

```go
func ResetShareSapMaterialStockAction()
```

##### `ResetShareSapPhysicalInventoryAction` <a name="ResetShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapPhysicalInventoryAction"></a>

```go
func ResetShareSapPhysicalInventoryAction()
```

##### `ResetShareSapProductMasterDataAction` <a name="ResetShareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapProductMasterDataAction"></a>

```go
func ResetShareSapProductMasterDataAction()
```

##### `ResetShareServiceNowAction` <a name="ResetShareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareServiceNowAction"></a>

```go
func ResetShareServiceNowAction()
```

##### `ResetShareSharePointAction` <a name="ResetShareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSharePointAction"></a>

```go
func ResetShareSharePointAction()
```

##### `ResetShareSlackAction` <a name="ResetShareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSlackAction"></a>

```go
func ResetShareSlackAction()
```

##### `ResetShareSmartsheetAction` <a name="ResetShareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSmartsheetAction"></a>

```go
func ResetShareSmartsheetAction()
```

##### `ResetShareSpaces` <a name="ResetShareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSpaces"></a>

```go
func ResetShareSpaces()
```

##### `ResetShareTextractAction` <a name="ResetShareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareTextractAction"></a>

```go
func ResetShareTextractAction()
```

##### `ResetShareZendeskAction` <a name="ResetShareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareZendeskAction"></a>

```go
func ResetShareZendeskAction()
```

##### `ResetSlackAction` <a name="ResetSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSlackAction"></a>

```go
func ResetSlackAction()
```

##### `ResetSmartsheetAction` <a name="ResetSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSmartsheetAction"></a>

```go
func ResetSmartsheetAction()
```

##### `ResetSpace` <a name="ResetSpace" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSpace"></a>

```go
func ResetSpace()
```

##### `ResetSubscribeDashboardEmailReports` <a name="ResetSubscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports"></a>

```go
func ResetSubscribeDashboardEmailReports()
```

##### `ResetTextractAction` <a name="ResetTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTextractAction"></a>

```go
func ResetTextractAction()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTopic"></a>

```go
func ResetTopic()
```

##### `ResetUseAgentWebSearch` <a name="ResetUseAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAgentWebSearch"></a>

```go
func ResetUseAgentWebSearch()
```

##### `ResetUseAmazonBedrockArsAction` <a name="ResetUseAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockArsAction"></a>

```go
func ResetUseAmazonBedrockArsAction()
```

##### `ResetUseAmazonBedrockFsAction` <a name="ResetUseAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockFsAction"></a>

```go
func ResetUseAmazonBedrockFsAction()
```

##### `ResetUseAmazonBedrockKrsAction` <a name="ResetUseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockKrsAction"></a>

```go
func ResetUseAmazonBedrockKrsAction()
```

##### `ResetUseAmazonSThreeAction` <a name="ResetUseAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonSThreeAction"></a>

```go
func ResetUseAmazonSThreeAction()
```

##### `ResetUseAsanaAction` <a name="ResetUseAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAsanaAction"></a>

```go
func ResetUseAsanaAction()
```

##### `ResetUseBambooHrAction` <a name="ResetUseBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBambooHrAction"></a>

```go
func ResetUseBambooHrAction()
```

##### `ResetUseBedrockModels` <a name="ResetUseBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBedrockModels"></a>

```go
func ResetUseBedrockModels()
```

##### `ResetUseBoxAgentAction` <a name="ResetUseBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBoxAgentAction"></a>

```go
func ResetUseBoxAgentAction()
```

##### `ResetUseCanvaAgentAction` <a name="ResetUseCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseCanvaAgentAction"></a>

```go
func ResetUseCanvaAgentAction()
```

##### `ResetUseComprehendAction` <a name="ResetUseComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendAction"></a>

```go
func ResetUseComprehendAction()
```

##### `ResetUseComprehendMedicalAction` <a name="ResetUseComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendMedicalAction"></a>

```go
func ResetUseComprehendMedicalAction()
```

##### `ResetUseConfluenceAction` <a name="ResetUseConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseConfluenceAction"></a>

```go
func ResetUseConfluenceAction()
```

##### `ResetUseFactSetAction` <a name="ResetUseFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseFactSetAction"></a>

```go
func ResetUseFactSetAction()
```

##### `ResetUseGenericHttpAction` <a name="ResetUseGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGenericHttpAction"></a>

```go
func ResetUseGenericHttpAction()
```

##### `ResetUseGithubAction` <a name="ResetUseGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGithubAction"></a>

```go
func ResetUseGithubAction()
```

##### `ResetUseGoogleCalendarAction` <a name="ResetUseGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGoogleCalendarAction"></a>

```go
func ResetUseGoogleCalendarAction()
```

##### `ResetUseHubspotAction` <a name="ResetUseHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHubspotAction"></a>

```go
func ResetUseHubspotAction()
```

##### `ResetUseHuggingFaceAction` <a name="ResetUseHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHuggingFaceAction"></a>

```go
func ResetUseHuggingFaceAction()
```

##### `ResetUseIntercomAction` <a name="ResetUseIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseIntercomAction"></a>

```go
func ResetUseIntercomAction()
```

##### `ResetUseJiraAction` <a name="ResetUseJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseJiraAction"></a>

```go
func ResetUseJiraAction()
```

##### `ResetUseLinearAction` <a name="ResetUseLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseLinearAction"></a>

```go
func ResetUseLinearAction()
```

##### `ResetUseMcpAction` <a name="ResetUseMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMcpAction"></a>

```go
func ResetUseMcpAction()
```

##### `ResetUseMondayAction` <a name="ResetUseMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMondayAction"></a>

```go
func ResetUseMondayAction()
```

##### `ResetUseMsExchangeAction` <a name="ResetUseMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsExchangeAction"></a>

```go
func ResetUseMsExchangeAction()
```

##### `ResetUseMsTeamsAction` <a name="ResetUseMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsTeamsAction"></a>

```go
func ResetUseMsTeamsAction()
```

##### `ResetUseNewRelicAction` <a name="ResetUseNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNewRelicAction"></a>

```go
func ResetUseNewRelicAction()
```

##### `ResetUseNotionAction` <a name="ResetUseNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNotionAction"></a>

```go
func ResetUseNotionAction()
```

##### `ResetUseOneDriveAction` <a name="ResetUseOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOneDriveAction"></a>

```go
func ResetUseOneDriveAction()
```

##### `ResetUseOpenApiAction` <a name="ResetUseOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOpenApiAction"></a>

```go
func ResetUseOpenApiAction()
```

##### `ResetUsePagerDutyAction` <a name="ResetUsePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUsePagerDutyAction"></a>

```go
func ResetUsePagerDutyAction()
```

##### `ResetUseSalesforceAction` <a name="ResetUseSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSalesforceAction"></a>

```go
func ResetUseSalesforceAction()
```

##### `ResetUseSandPGlobalEnergyAction` <a name="ResetUseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPGlobalEnergyAction"></a>

```go
func ResetUseSandPGlobalEnergyAction()
```

##### `ResetUseSandPgmiAction` <a name="ResetUseSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPgmiAction"></a>

```go
func ResetUseSandPgmiAction()
```

##### `ResetUseSapBillOfMaterialAction` <a name="ResetUseSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBillOfMaterialAction"></a>

```go
func ResetUseSapBillOfMaterialAction()
```

##### `ResetUseSapBusinessPartnerAction` <a name="ResetUseSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBusinessPartnerAction"></a>

```go
func ResetUseSapBusinessPartnerAction()
```

##### `ResetUseSapMaterialStockAction` <a name="ResetUseSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapMaterialStockAction"></a>

```go
func ResetUseSapMaterialStockAction()
```

##### `ResetUseSapPhysicalInventoryAction` <a name="ResetUseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapPhysicalInventoryAction"></a>

```go
func ResetUseSapPhysicalInventoryAction()
```

##### `ResetUseSapProductMasterDataAction` <a name="ResetUseSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapProductMasterDataAction"></a>

```go
func ResetUseSapProductMasterDataAction()
```

##### `ResetUseServiceNowAction` <a name="ResetUseServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseServiceNowAction"></a>

```go
func ResetUseServiceNowAction()
```

##### `ResetUseSharePointAction` <a name="ResetUseSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSharePointAction"></a>

```go
func ResetUseSharePointAction()
```

##### `ResetUseSlackAction` <a name="ResetUseSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSlackAction"></a>

```go
func ResetUseSlackAction()
```

##### `ResetUseSmartsheetAction` <a name="ResetUseSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSmartsheetAction"></a>

```go
func ResetUseSmartsheetAction()
```

##### `ResetUseTextractAction` <a name="ResetUseTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseTextractAction"></a>

```go
func ResetUseTextractAction()
```

##### `ResetUseZendeskAction` <a name="ResetUseZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseZendeskAction"></a>

```go
func ResetUseZendeskAction()
```

##### `ResetViewAccountSpiceCapacity` <a name="ResetViewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity"></a>

```go
func ResetViewAccountSpiceCapacity()
```

##### `ResetZendeskAction` <a name="ResetZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetZendeskAction"></a>

```go
func ResetZendeskAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStoreInput">AccessAppsNativeDataStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput">AddOrRunAnomalyDetectionForAnalysesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsActionInput">AmazonBedrockArsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsActionInput">AmazonBedrockFsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsActionInput">AmazonBedrockKrsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeActionInput">AmazonSThreeActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysisInput">AnalysisInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequestsInput">ApproveFlowShareRequestsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.appsInput">AppsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaActionInput">AsanaActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automateInput">AutomateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrActionInput">BambooHrActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentActionInput">BoxAgentActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQInput">BuildCalculatedFieldWithQInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentActionInput">CanvaAgentActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgentInput">ChatAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendActionInput">ComprehendActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalActionInput">ComprehendMedicalActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceActionInput">ConfluenceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsActionInput">CreateAndUpdateAmazonBedrockArsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsActionInput">CreateAndUpdateAmazonBedrockFsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsActionInput">CreateAndUpdateAmazonBedrockKrsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeActionInput">CreateAndUpdateAmazonSThreeActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAppsInput">CreateAndUpdateAppsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaActionInput">CreateAndUpdateAsanaActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrActionInput">CreateAndUpdateBambooHrActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentActionInput">CreateAndUpdateBoxAgentActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentActionInput">CreateAndUpdateCanvaAgentActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendActionInput">CreateAndUpdateComprehendActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalActionInput">CreateAndUpdateComprehendMedicalActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceActionInput">CreateAndUpdateConfluenceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput">CreateAndUpdateDashboardEmailReportsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput">CreateAndUpdateDatasetsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput">CreateAndUpdateDataSourcesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetActionInput">CreateAndUpdateFactSetActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpActionInput">CreateAndUpdateGenericHttpActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubActionInput">CreateAndUpdateGithubActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarActionInput">CreateAndUpdateGoogleCalendarActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotActionInput">CreateAndUpdateHubspotActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceActionInput">CreateAndUpdateHuggingFaceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomActionInput">CreateAndUpdateIntercomActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraActionInput">CreateAndUpdateJiraActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBasesInput">CreateAndUpdateKnowledgeBasesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearActionInput">CreateAndUpdateLinearActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpActionInput">CreateAndUpdateMcpActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayActionInput">CreateAndUpdateMondayActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeActionInput">CreateAndUpdateMsExchangeActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsActionInput">CreateAndUpdateMsTeamsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicActionInput">CreateAndUpdateNewRelicActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionActionInput">CreateAndUpdateNotionActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveActionInput">CreateAndUpdateOneDriveActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiActionInput">CreateAndUpdateOpenApiActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyActionInput">CreateAndUpdatePagerDutyActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceActionInput">CreateAndUpdateSalesforceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyActionInput">CreateAndUpdateSandPGlobalEnergyActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiActionInput">CreateAndUpdateSandPgmiActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialActionInput">CreateAndUpdateSapBillOfMaterialActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerActionInput">CreateAndUpdateSapBusinessPartnerActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockActionInput">CreateAndUpdateSapMaterialStockActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryActionInput">CreateAndUpdateSapPhysicalInventoryActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataActionInput">CreateAndUpdateSapProductMasterDataActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowActionInput">CreateAndUpdateServiceNowActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointActionInput">CreateAndUpdateSharePointActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackActionInput">CreateAndUpdateSlackActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetActionInput">CreateAndUpdateSmartsheetActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractActionInput">CreateAndUpdateTextractActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput">CreateAndUpdateThemesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput">CreateAndUpdateThresholdAlertsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskActionInput">CreateAndUpdateZendeskActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgentsInput">CreateChatAgentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQInput">CreateDashboardExecutiveSummaryWithQInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput">CreateSharedFoldersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpacesInput">CreateSpacesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput">CreateSpiceDatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboardInput">DashboardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQInput">EditVisualWithQInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput">ExportToCsvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput">ExportToCsvInScheduledReportsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput">ExportToExcelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput">ExportToExcelInScheduledReportsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput">ExportToPdfInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput">ExportToPdfInScheduledReportsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extensionInput">ExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetActionInput">FactSetActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flowInput">FlowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpActionInput">GenericHttpActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubActionInput">GithubActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarActionInput">GoogleCalendarActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotActionInput">HubspotActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceActionInput">HuggingFaceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput">IncludeContentInScheduledReportsEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomActionInput">IntercomActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInferenceInput">InvokeAppsAiInferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraActionInput">JiraActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBaseInput">KnowledgeBaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearActionInput">LinearActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFoldersInput">ManageSharedFoldersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpActionInput">McpActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayActionInput">MondayActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeActionInput">MsExchangeActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsActionInput">MsTeamsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicActionInput">NewRelicActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionActionInput">NotionActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveActionInput">OneDriveActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiActionInput">OpenApiActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyActionInput">PagerDutyActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTaskInput">PerformFlowUiTaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput">PrintReportsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApprovalInput">PublishWithoutApprovalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput">RenameSharedFoldersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.researchInput">ResearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceActionInput">SalesforceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyActionInput">SandPGlobalEnergyActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiActionInput">SandPgmiActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialActionInput">SapBillOfMaterialActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerActionInput">SapBusinessPartnerActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockActionInput">SapMaterialStockActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryActionInput">SapPhysicalInventoryActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataActionInput">SapProductMasterDataActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowActionInput">ServiceNowActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsActionInput">ShareAmazonBedrockArsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsActionInput">ShareAmazonBedrockFsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsActionInput">ShareAmazonBedrockKrsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeActionInput">ShareAmazonSThreeActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput">ShareAnalysesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAppsInput">ShareAppsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaActionInput">ShareAsanaActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrActionInput">ShareBambooHrActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentActionInput">ShareBoxAgentActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentActionInput">ShareCanvaAgentActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgentsInput">ShareChatAgentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendActionInput">ShareComprehendActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalActionInput">ShareComprehendMedicalActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceActionInput">ShareConfluenceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput">ShareDashboardsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput">ShareDatasetsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput">ShareDataSourcesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetActionInput">ShareFactSetActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpActionInput">ShareGenericHttpActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubActionInput">ShareGithubActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarActionInput">ShareGoogleCalendarActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotActionInput">ShareHubspotActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceActionInput">ShareHuggingFaceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomActionInput">ShareIntercomActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraActionInput">ShareJiraActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBasesInput">ShareKnowledgeBasesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearActionInput">ShareLinearActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpActionInput">ShareMcpActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayActionInput">ShareMondayActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeActionInput">ShareMsExchangeActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsActionInput">ShareMsTeamsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicActionInput">ShareNewRelicActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionActionInput">ShareNotionActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveActionInput">ShareOneDriveActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiActionInput">ShareOpenApiActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyActionInput">SharePagerDutyActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointActionInput">SharePointActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceActionInput">ShareSalesforceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyActionInput">ShareSandPGlobalEnergyActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiActionInput">ShareSandPgmiActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialActionInput">ShareSapBillOfMaterialActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerActionInput">ShareSapBusinessPartnerActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockActionInput">ShareSapMaterialStockActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryActionInput">ShareSapPhysicalInventoryActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataActionInput">ShareSapProductMasterDataActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowActionInput">ShareServiceNowActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointActionInput">ShareSharePointActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackActionInput">ShareSlackActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetActionInput">ShareSmartsheetActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpacesInput">ShareSpacesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractActionInput">ShareTextractActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskActionInput">ShareZendeskActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackActionInput">SlackActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetActionInput">SmartsheetActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.spaceInput">SpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput">SubscribeDashboardEmailReportsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractActionInput">TextractActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearchInput">UseAgentWebSearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsActionInput">UseAmazonBedrockArsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsActionInput">UseAmazonBedrockFsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsActionInput">UseAmazonBedrockKrsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeActionInput">UseAmazonSThreeActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaActionInput">UseAsanaActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrActionInput">UseBambooHrActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModelsInput">UseBedrockModelsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentActionInput">UseBoxAgentActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentActionInput">UseCanvaAgentActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendActionInput">UseComprehendActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalActionInput">UseComprehendMedicalActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceActionInput">UseConfluenceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetActionInput">UseFactSetActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpActionInput">UseGenericHttpActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubActionInput">UseGithubActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarActionInput">UseGoogleCalendarActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotActionInput">UseHubspotActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceActionInput">UseHuggingFaceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomActionInput">UseIntercomActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraActionInput">UseJiraActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearActionInput">UseLinearActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpActionInput">UseMcpActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayActionInput">UseMondayActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeActionInput">UseMsExchangeActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsActionInput">UseMsTeamsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicActionInput">UseNewRelicActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionActionInput">UseNotionActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveActionInput">UseOneDriveActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiActionInput">UseOpenApiActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyActionInput">UsePagerDutyActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceActionInput">UseSalesforceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyActionInput">UseSandPGlobalEnergyActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiActionInput">UseSandPgmiActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialActionInput">UseSapBillOfMaterialActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerActionInput">UseSapBusinessPartnerActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockActionInput">UseSapMaterialStockActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryActionInput">UseSapPhysicalInventoryActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataActionInput">UseSapProductMasterDataActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowActionInput">UseServiceNowActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointActionInput">UseSharePointActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackActionInput">UseSlackActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetActionInput">UseSmartsheetActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractActionInput">UseTextractActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskActionInput">UseZendeskActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput">ViewAccountSpiceCapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskActionInput">ZendeskActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore">AccessAppsNativeDataStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">AddOrRunAnomalyDetectionForAnalyses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction">AmazonBedrockArsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction">AmazonBedrockFsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction">AmazonBedrockKrsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction">AmazonSThreeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis">Analysis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests">ApproveFlowShareRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.apps">Apps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction">AsanaAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automate">Automate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction">BambooHrAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction">BoxAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ">BuildCalculatedFieldWithQ</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction">CanvaAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent">ChatAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction">ComprehendAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction">ComprehendMedicalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction">ConfluenceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction">CreateAndUpdateAmazonBedrockArsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction">CreateAndUpdateAmazonBedrockFsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction">CreateAndUpdateAmazonBedrockKrsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction">CreateAndUpdateAmazonSThreeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps">CreateAndUpdateApps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction">CreateAndUpdateAsanaAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction">CreateAndUpdateBambooHrAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction">CreateAndUpdateBoxAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction">CreateAndUpdateCanvaAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction">CreateAndUpdateComprehendAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction">CreateAndUpdateComprehendMedicalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction">CreateAndUpdateConfluenceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">CreateAndUpdateDashboardEmailReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">CreateAndUpdateDatasets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">CreateAndUpdateDataSources</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction">CreateAndUpdateFactSetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction">CreateAndUpdateGenericHttpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction">CreateAndUpdateGithubAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction">CreateAndUpdateGoogleCalendarAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction">CreateAndUpdateHubspotAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction">CreateAndUpdateHuggingFaceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction">CreateAndUpdateIntercomAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction">CreateAndUpdateJiraAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases">CreateAndUpdateKnowledgeBases</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction">CreateAndUpdateLinearAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction">CreateAndUpdateMcpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction">CreateAndUpdateMondayAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction">CreateAndUpdateMsExchangeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction">CreateAndUpdateMsTeamsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction">CreateAndUpdateNewRelicAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction">CreateAndUpdateNotionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction">CreateAndUpdateOneDriveAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction">CreateAndUpdateOpenApiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction">CreateAndUpdatePagerDutyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction">CreateAndUpdateSalesforceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction">CreateAndUpdateSandPGlobalEnergyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction">CreateAndUpdateSandPgmiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction">CreateAndUpdateSapBillOfMaterialAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction">CreateAndUpdateSapBusinessPartnerAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction">CreateAndUpdateSapMaterialStockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction">CreateAndUpdateSapPhysicalInventoryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction">CreateAndUpdateSapProductMasterDataAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction">CreateAndUpdateServiceNowAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction">CreateAndUpdateSharePointAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction">CreateAndUpdateSlackAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction">CreateAndUpdateSmartsheetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction">CreateAndUpdateTextractAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">CreateAndUpdateThemes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">CreateAndUpdateThresholdAlerts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction">CreateAndUpdateZendeskAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents">CreateChatAgents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ">CreateDashboardExecutiveSummaryWithQ</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">CreateSharedFolders</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces">CreateSpaces</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">CreateSpiceDataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard">Dashboard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ">EditVisualWithQ</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">ExportToCsv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">ExportToCsvInScheduledReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">ExportToExcel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">ExportToExcelInScheduledReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">ExportToPdf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">ExportToPdfInScheduledReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extension">Extension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction">FactSetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flow">Flow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction">GenericHttpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction">GithubAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction">GoogleCalendarAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction">HubspotAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction">HuggingFaceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">IncludeContentInScheduledReportsEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction">IntercomAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference">InvokeAppsAiInference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction">JiraAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase">KnowledgeBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction">LinearAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders">ManageSharedFolders</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction">McpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction">MondayAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction">MsExchangeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction">MsTeamsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction">NewRelicAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction">NotionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction">OneDriveAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction">OpenApiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction">PagerDutyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask">PerformFlowUiTask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">PrintReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval">PublishWithoutApproval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">RenameSharedFolders</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.research">Research</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction">SalesforceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction">SandPGlobalEnergyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction">SandPgmiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction">SapBillOfMaterialAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction">SapBusinessPartnerAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction">SapMaterialStockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction">SapPhysicalInventoryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction">SapProductMasterDataAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction">ServiceNowAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction">ShareAmazonBedrockArsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction">ShareAmazonBedrockFsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction">ShareAmazonBedrockKrsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction">ShareAmazonSThreeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">ShareAnalyses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps">ShareApps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction">ShareAsanaAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction">ShareBambooHrAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction">ShareBoxAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction">ShareCanvaAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents">ShareChatAgents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction">ShareComprehendAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction">ShareComprehendMedicalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction">ShareConfluenceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">ShareDashboards</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">ShareDatasets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">ShareDataSources</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction">ShareFactSetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction">ShareGenericHttpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction">ShareGithubAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction">ShareGoogleCalendarAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction">ShareHubspotAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction">ShareHuggingFaceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction">ShareIntercomAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction">ShareJiraAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases">ShareKnowledgeBases</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction">ShareLinearAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction">ShareMcpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction">ShareMondayAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction">ShareMsExchangeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction">ShareMsTeamsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction">ShareNewRelicAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction">ShareNotionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction">ShareOneDriveAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction">ShareOpenApiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction">SharePagerDutyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction">SharePointAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction">ShareSalesforceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction">ShareSandPGlobalEnergyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction">ShareSandPgmiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction">ShareSapBillOfMaterialAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction">ShareSapBusinessPartnerAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction">ShareSapMaterialStockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction">ShareSapPhysicalInventoryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction">ShareSapProductMasterDataAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction">ShareServiceNowAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction">ShareSharePointAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction">ShareSlackAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction">ShareSmartsheetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces">ShareSpaces</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction">ShareTextractAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction">ShareZendeskAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction">SlackAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction">SmartsheetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.space">Space</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">SubscribeDashboardEmailReports</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction">TextractAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch">UseAgentWebSearch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction">UseAmazonBedrockArsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction">UseAmazonBedrockFsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction">UseAmazonBedrockKrsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction">UseAmazonSThreeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction">UseAsanaAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction">UseBambooHrAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels">UseBedrockModels</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction">UseBoxAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction">UseCanvaAgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction">UseComprehendAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction">UseComprehendMedicalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction">UseConfluenceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction">UseFactSetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction">UseGenericHttpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction">UseGithubAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction">UseGoogleCalendarAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction">UseHubspotAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction">UseHuggingFaceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction">UseIntercomAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction">UseJiraAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction">UseLinearAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction">UseMcpAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction">UseMondayAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction">UseMsExchangeAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction">UseMsTeamsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction">UseNewRelicAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction">UseNotionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction">UseOneDriveAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction">UseOpenApiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction">UsePagerDutyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction">UseSalesforceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction">UseSandPGlobalEnergyAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction">UseSandPgmiAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction">UseSapBillOfMaterialAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction">UseSapBusinessPartnerAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction">UseSapMaterialStockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction">UseSapPhysicalInventoryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction">UseSapProductMasterDataAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction">UseServiceNowAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction">UseSharePointAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction">UseSlackAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction">UseSmartsheetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction">UseTextractAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction">UseZendeskAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">ViewAccountSpiceCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction">ZendeskAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessAppsNativeDataStoreInput`<sup>Optional</sup> <a name="AccessAppsNativeDataStoreInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStoreInput"></a>

```go
func AccessAppsNativeDataStoreInput() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `AddOrRunAnomalyDetectionForAnalysesInput`<sup>Optional</sup> <a name="AddOrRunAnomalyDetectionForAnalysesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput"></a>

```go
func AddOrRunAnomalyDetectionForAnalysesInput() *string
```

- *Type:* *string

---

##### `AmazonBedrockArsActionInput`<sup>Optional</sup> <a name="AmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsActionInput"></a>

```go
func AmazonBedrockArsActionInput() *string
```

- *Type:* *string

---

##### `AmazonBedrockFsActionInput`<sup>Optional</sup> <a name="AmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsActionInput"></a>

```go
func AmazonBedrockFsActionInput() *string
```

- *Type:* *string

---

##### `AmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="AmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsActionInput"></a>

```go
func AmazonBedrockKrsActionInput() *string
```

- *Type:* *string

---

##### `AmazonSThreeActionInput`<sup>Optional</sup> <a name="AmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeActionInput"></a>

```go
func AmazonSThreeActionInput() *string
```

- *Type:* *string

---

##### `AnalysisInput`<sup>Optional</sup> <a name="AnalysisInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysisInput"></a>

```go
func AnalysisInput() *string
```

- *Type:* *string

---

##### `ApproveFlowShareRequestsInput`<sup>Optional</sup> <a name="ApproveFlowShareRequestsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequestsInput"></a>

```go
func ApproveFlowShareRequestsInput() *string
```

- *Type:* *string

---

##### `AppsInput`<sup>Optional</sup> <a name="AppsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.appsInput"></a>

```go
func AppsInput() *string
```

- *Type:* *string

---

##### `AsanaActionInput`<sup>Optional</sup> <a name="AsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaActionInput"></a>

```go
func AsanaActionInput() *string
```

- *Type:* *string

---

##### `AutomateInput`<sup>Optional</sup> <a name="AutomateInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automateInput"></a>

```go
func AutomateInput() *string
```

- *Type:* *string

---

##### `BambooHrActionInput`<sup>Optional</sup> <a name="BambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrActionInput"></a>

```go
func BambooHrActionInput() *string
```

- *Type:* *string

---

##### `BoxAgentActionInput`<sup>Optional</sup> <a name="BoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentActionInput"></a>

```go
func BoxAgentActionInput() *string
```

- *Type:* *string

---

##### `BuildCalculatedFieldWithQInput`<sup>Optional</sup> <a name="BuildCalculatedFieldWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQInput"></a>

```go
func BuildCalculatedFieldWithQInput() *string
```

- *Type:* *string

---

##### `CanvaAgentActionInput`<sup>Optional</sup> <a name="CanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentActionInput"></a>

```go
func CanvaAgentActionInput() *string
```

- *Type:* *string

---

##### `ChatAgentInput`<sup>Optional</sup> <a name="ChatAgentInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgentInput"></a>

```go
func ChatAgentInput() *string
```

- *Type:* *string

---

##### `ComprehendActionInput`<sup>Optional</sup> <a name="ComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendActionInput"></a>

```go
func ComprehendActionInput() *string
```

- *Type:* *string

---

##### `ComprehendMedicalActionInput`<sup>Optional</sup> <a name="ComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalActionInput"></a>

```go
func ComprehendMedicalActionInput() *string
```

- *Type:* *string

---

##### `ConfluenceActionInput`<sup>Optional</sup> <a name="ConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceActionInput"></a>

```go
func ConfluenceActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsActionInput"></a>

```go
func CreateAndUpdateAmazonBedrockArsActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsActionInput"></a>

```go
func CreateAndUpdateAmazonBedrockFsActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsActionInput"></a>

```go
func CreateAndUpdateAmazonBedrockKrsActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonSThreeActionInput`<sup>Optional</sup> <a name="CreateAndUpdateAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeActionInput"></a>

```go
func CreateAndUpdateAmazonSThreeActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAppsInput`<sup>Optional</sup> <a name="CreateAndUpdateAppsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAppsInput"></a>

```go
func CreateAndUpdateAppsInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAsanaActionInput`<sup>Optional</sup> <a name="CreateAndUpdateAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaActionInput"></a>

```go
func CreateAndUpdateAsanaActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateBambooHrActionInput`<sup>Optional</sup> <a name="CreateAndUpdateBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrActionInput"></a>

```go
func CreateAndUpdateBambooHrActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateBoxAgentActionInput`<sup>Optional</sup> <a name="CreateAndUpdateBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentActionInput"></a>

```go
func CreateAndUpdateBoxAgentActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateCanvaAgentActionInput`<sup>Optional</sup> <a name="CreateAndUpdateCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentActionInput"></a>

```go
func CreateAndUpdateCanvaAgentActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateComprehendActionInput`<sup>Optional</sup> <a name="CreateAndUpdateComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendActionInput"></a>

```go
func CreateAndUpdateComprehendActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateComprehendMedicalActionInput`<sup>Optional</sup> <a name="CreateAndUpdateComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalActionInput"></a>

```go
func CreateAndUpdateComprehendMedicalActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateConfluenceActionInput`<sup>Optional</sup> <a name="CreateAndUpdateConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceActionInput"></a>

```go
func CreateAndUpdateConfluenceActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateDashboardEmailReportsInput`<sup>Optional</sup> <a name="CreateAndUpdateDashboardEmailReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput"></a>

```go
func CreateAndUpdateDashboardEmailReportsInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateDatasetsInput`<sup>Optional</sup> <a name="CreateAndUpdateDatasetsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput"></a>

```go
func CreateAndUpdateDatasetsInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateDataSourcesInput`<sup>Optional</sup> <a name="CreateAndUpdateDataSourcesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput"></a>

```go
func CreateAndUpdateDataSourcesInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateFactSetActionInput`<sup>Optional</sup> <a name="CreateAndUpdateFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetActionInput"></a>

```go
func CreateAndUpdateFactSetActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateGenericHttpActionInput`<sup>Optional</sup> <a name="CreateAndUpdateGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpActionInput"></a>

```go
func CreateAndUpdateGenericHttpActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateGithubActionInput`<sup>Optional</sup> <a name="CreateAndUpdateGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubActionInput"></a>

```go
func CreateAndUpdateGithubActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateGoogleCalendarActionInput`<sup>Optional</sup> <a name="CreateAndUpdateGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarActionInput"></a>

```go
func CreateAndUpdateGoogleCalendarActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateHubspotActionInput`<sup>Optional</sup> <a name="CreateAndUpdateHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotActionInput"></a>

```go
func CreateAndUpdateHubspotActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateHuggingFaceActionInput`<sup>Optional</sup> <a name="CreateAndUpdateHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceActionInput"></a>

```go
func CreateAndUpdateHuggingFaceActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateIntercomActionInput`<sup>Optional</sup> <a name="CreateAndUpdateIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomActionInput"></a>

```go
func CreateAndUpdateIntercomActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateJiraActionInput`<sup>Optional</sup> <a name="CreateAndUpdateJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraActionInput"></a>

```go
func CreateAndUpdateJiraActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateKnowledgeBasesInput`<sup>Optional</sup> <a name="CreateAndUpdateKnowledgeBasesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBasesInput"></a>

```go
func CreateAndUpdateKnowledgeBasesInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateLinearActionInput`<sup>Optional</sup> <a name="CreateAndUpdateLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearActionInput"></a>

```go
func CreateAndUpdateLinearActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMcpActionInput`<sup>Optional</sup> <a name="CreateAndUpdateMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpActionInput"></a>

```go
func CreateAndUpdateMcpActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMondayActionInput`<sup>Optional</sup> <a name="CreateAndUpdateMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayActionInput"></a>

```go
func CreateAndUpdateMondayActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMsExchangeActionInput`<sup>Optional</sup> <a name="CreateAndUpdateMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeActionInput"></a>

```go
func CreateAndUpdateMsExchangeActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMsTeamsActionInput`<sup>Optional</sup> <a name="CreateAndUpdateMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsActionInput"></a>

```go
func CreateAndUpdateMsTeamsActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateNewRelicActionInput`<sup>Optional</sup> <a name="CreateAndUpdateNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicActionInput"></a>

```go
func CreateAndUpdateNewRelicActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateNotionActionInput`<sup>Optional</sup> <a name="CreateAndUpdateNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionActionInput"></a>

```go
func CreateAndUpdateNotionActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateOneDriveActionInput`<sup>Optional</sup> <a name="CreateAndUpdateOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveActionInput"></a>

```go
func CreateAndUpdateOneDriveActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateOpenApiActionInput`<sup>Optional</sup> <a name="CreateAndUpdateOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiActionInput"></a>

```go
func CreateAndUpdateOpenApiActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdatePagerDutyActionInput`<sup>Optional</sup> <a name="CreateAndUpdatePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyActionInput"></a>

```go
func CreateAndUpdatePagerDutyActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSalesforceActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceActionInput"></a>

```go
func CreateAndUpdateSalesforceActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyActionInput"></a>

```go
func CreateAndUpdateSandPGlobalEnergyActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSandPgmiActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiActionInput"></a>

```go
func CreateAndUpdateSandPgmiActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialActionInput"></a>

```go
func CreateAndUpdateSapBillOfMaterialActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerActionInput"></a>

```go
func CreateAndUpdateSapBusinessPartnerActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapMaterialStockActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockActionInput"></a>

```go
func CreateAndUpdateSapMaterialStockActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryActionInput"></a>

```go
func CreateAndUpdateSapPhysicalInventoryActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapProductMasterDataActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataActionInput"></a>

```go
func CreateAndUpdateSapProductMasterDataActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateServiceNowActionInput`<sup>Optional</sup> <a name="CreateAndUpdateServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowActionInput"></a>

```go
func CreateAndUpdateServiceNowActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSharePointActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointActionInput"></a>

```go
func CreateAndUpdateSharePointActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSlackActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackActionInput"></a>

```go
func CreateAndUpdateSlackActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSmartsheetActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetActionInput"></a>

```go
func CreateAndUpdateSmartsheetActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateTextractActionInput`<sup>Optional</sup> <a name="CreateAndUpdateTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractActionInput"></a>

```go
func CreateAndUpdateTextractActionInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateThemesInput`<sup>Optional</sup> <a name="CreateAndUpdateThemesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput"></a>

```go
func CreateAndUpdateThemesInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateThresholdAlertsInput`<sup>Optional</sup> <a name="CreateAndUpdateThresholdAlertsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput"></a>

```go
func CreateAndUpdateThresholdAlertsInput() *string
```

- *Type:* *string

---

##### `CreateAndUpdateZendeskActionInput`<sup>Optional</sup> <a name="CreateAndUpdateZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskActionInput"></a>

```go
func CreateAndUpdateZendeskActionInput() *string
```

- *Type:* *string

---

##### `CreateChatAgentsInput`<sup>Optional</sup> <a name="CreateChatAgentsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgentsInput"></a>

```go
func CreateChatAgentsInput() *string
```

- *Type:* *string

---

##### `CreateDashboardExecutiveSummaryWithQInput`<sup>Optional</sup> <a name="CreateDashboardExecutiveSummaryWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQInput"></a>

```go
func CreateDashboardExecutiveSummaryWithQInput() *string
```

- *Type:* *string

---

##### `CreateSharedFoldersInput`<sup>Optional</sup> <a name="CreateSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput"></a>

```go
func CreateSharedFoldersInput() *string
```

- *Type:* *string

---

##### `CreateSpacesInput`<sup>Optional</sup> <a name="CreateSpacesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpacesInput"></a>

```go
func CreateSpacesInput() *string
```

- *Type:* *string

---

##### `CreateSpiceDatasetInput`<sup>Optional</sup> <a name="CreateSpiceDatasetInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput"></a>

```go
func CreateSpiceDatasetInput() *string
```

- *Type:* *string

---

##### `DashboardInput`<sup>Optional</sup> <a name="DashboardInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboardInput"></a>

```go
func DashboardInput() *string
```

- *Type:* *string

---

##### `EditVisualWithQInput`<sup>Optional</sup> <a name="EditVisualWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQInput"></a>

```go
func EditVisualWithQInput() *string
```

- *Type:* *string

---

##### `ExportToCsvInput`<sup>Optional</sup> <a name="ExportToCsvInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput"></a>

```go
func ExportToCsvInput() *string
```

- *Type:* *string

---

##### `ExportToCsvInScheduledReportsInput`<sup>Optional</sup> <a name="ExportToCsvInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput"></a>

```go
func ExportToCsvInScheduledReportsInput() *string
```

- *Type:* *string

---

##### `ExportToExcelInput`<sup>Optional</sup> <a name="ExportToExcelInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput"></a>

```go
func ExportToExcelInput() *string
```

- *Type:* *string

---

##### `ExportToExcelInScheduledReportsInput`<sup>Optional</sup> <a name="ExportToExcelInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput"></a>

```go
func ExportToExcelInScheduledReportsInput() *string
```

- *Type:* *string

---

##### `ExportToPdfInput`<sup>Optional</sup> <a name="ExportToPdfInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput"></a>

```go
func ExportToPdfInput() *string
```

- *Type:* *string

---

##### `ExportToPdfInScheduledReportsInput`<sup>Optional</sup> <a name="ExportToPdfInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput"></a>

```go
func ExportToPdfInScheduledReportsInput() *string
```

- *Type:* *string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extensionInput"></a>

```go
func ExtensionInput() *string
```

- *Type:* *string

---

##### `FactSetActionInput`<sup>Optional</sup> <a name="FactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetActionInput"></a>

```go
func FactSetActionInput() *string
```

- *Type:* *string

---

##### `FlowInput`<sup>Optional</sup> <a name="FlowInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flowInput"></a>

```go
func FlowInput() *string
```

- *Type:* *string

---

##### `GenericHttpActionInput`<sup>Optional</sup> <a name="GenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpActionInput"></a>

```go
func GenericHttpActionInput() *string
```

- *Type:* *string

---

##### `GithubActionInput`<sup>Optional</sup> <a name="GithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubActionInput"></a>

```go
func GithubActionInput() *string
```

- *Type:* *string

---

##### `GoogleCalendarActionInput`<sup>Optional</sup> <a name="GoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarActionInput"></a>

```go
func GoogleCalendarActionInput() *string
```

- *Type:* *string

---

##### `HubspotActionInput`<sup>Optional</sup> <a name="HubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotActionInput"></a>

```go
func HubspotActionInput() *string
```

- *Type:* *string

---

##### `HuggingFaceActionInput`<sup>Optional</sup> <a name="HuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceActionInput"></a>

```go
func HuggingFaceActionInput() *string
```

- *Type:* *string

---

##### `IncludeContentInScheduledReportsEmailInput`<sup>Optional</sup> <a name="IncludeContentInScheduledReportsEmailInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput"></a>

```go
func IncludeContentInScheduledReportsEmailInput() *string
```

- *Type:* *string

---

##### `IntercomActionInput`<sup>Optional</sup> <a name="IntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomActionInput"></a>

```go
func IntercomActionInput() *string
```

- *Type:* *string

---

##### `InvokeAppsAiInferenceInput`<sup>Optional</sup> <a name="InvokeAppsAiInferenceInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInferenceInput"></a>

```go
func InvokeAppsAiInferenceInput() *string
```

- *Type:* *string

---

##### `JiraActionInput`<sup>Optional</sup> <a name="JiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraActionInput"></a>

```go
func JiraActionInput() *string
```

- *Type:* *string

---

##### `KnowledgeBaseInput`<sup>Optional</sup> <a name="KnowledgeBaseInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBaseInput"></a>

```go
func KnowledgeBaseInput() *string
```

- *Type:* *string

---

##### `LinearActionInput`<sup>Optional</sup> <a name="LinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearActionInput"></a>

```go
func LinearActionInput() *string
```

- *Type:* *string

---

##### `ManageSharedFoldersInput`<sup>Optional</sup> <a name="ManageSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFoldersInput"></a>

```go
func ManageSharedFoldersInput() *string
```

- *Type:* *string

---

##### `McpActionInput`<sup>Optional</sup> <a name="McpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpActionInput"></a>

```go
func McpActionInput() *string
```

- *Type:* *string

---

##### `MondayActionInput`<sup>Optional</sup> <a name="MondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayActionInput"></a>

```go
func MondayActionInput() *string
```

- *Type:* *string

---

##### `MsExchangeActionInput`<sup>Optional</sup> <a name="MsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeActionInput"></a>

```go
func MsExchangeActionInput() *string
```

- *Type:* *string

---

##### `MsTeamsActionInput`<sup>Optional</sup> <a name="MsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsActionInput"></a>

```go
func MsTeamsActionInput() *string
```

- *Type:* *string

---

##### `NewRelicActionInput`<sup>Optional</sup> <a name="NewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicActionInput"></a>

```go
func NewRelicActionInput() *string
```

- *Type:* *string

---

##### `NotionActionInput`<sup>Optional</sup> <a name="NotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionActionInput"></a>

```go
func NotionActionInput() *string
```

- *Type:* *string

---

##### `OneDriveActionInput`<sup>Optional</sup> <a name="OneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveActionInput"></a>

```go
func OneDriveActionInput() *string
```

- *Type:* *string

---

##### `OpenApiActionInput`<sup>Optional</sup> <a name="OpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiActionInput"></a>

```go
func OpenApiActionInput() *string
```

- *Type:* *string

---

##### `PagerDutyActionInput`<sup>Optional</sup> <a name="PagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyActionInput"></a>

```go
func PagerDutyActionInput() *string
```

- *Type:* *string

---

##### `PerformFlowUiTaskInput`<sup>Optional</sup> <a name="PerformFlowUiTaskInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTaskInput"></a>

```go
func PerformFlowUiTaskInput() *string
```

- *Type:* *string

---

##### `PrintReportsInput`<sup>Optional</sup> <a name="PrintReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput"></a>

```go
func PrintReportsInput() *string
```

- *Type:* *string

---

##### `PublishWithoutApprovalInput`<sup>Optional</sup> <a name="PublishWithoutApprovalInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApprovalInput"></a>

```go
func PublishWithoutApprovalInput() *string
```

- *Type:* *string

---

##### `RenameSharedFoldersInput`<sup>Optional</sup> <a name="RenameSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput"></a>

```go
func RenameSharedFoldersInput() *string
```

- *Type:* *string

---

##### `ResearchInput`<sup>Optional</sup> <a name="ResearchInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.researchInput"></a>

```go
func ResearchInput() *string
```

- *Type:* *string

---

##### `SalesforceActionInput`<sup>Optional</sup> <a name="SalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceActionInput"></a>

```go
func SalesforceActionInput() *string
```

- *Type:* *string

---

##### `SandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="SandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyActionInput"></a>

```go
func SandPGlobalEnergyActionInput() *string
```

- *Type:* *string

---

##### `SandPgmiActionInput`<sup>Optional</sup> <a name="SandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiActionInput"></a>

```go
func SandPgmiActionInput() *string
```

- *Type:* *string

---

##### `SapBillOfMaterialActionInput`<sup>Optional</sup> <a name="SapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialActionInput"></a>

```go
func SapBillOfMaterialActionInput() *string
```

- *Type:* *string

---

##### `SapBusinessPartnerActionInput`<sup>Optional</sup> <a name="SapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerActionInput"></a>

```go
func SapBusinessPartnerActionInput() *string
```

- *Type:* *string

---

##### `SapMaterialStockActionInput`<sup>Optional</sup> <a name="SapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockActionInput"></a>

```go
func SapMaterialStockActionInput() *string
```

- *Type:* *string

---

##### `SapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="SapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryActionInput"></a>

```go
func SapPhysicalInventoryActionInput() *string
```

- *Type:* *string

---

##### `SapProductMasterDataActionInput`<sup>Optional</sup> <a name="SapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataActionInput"></a>

```go
func SapProductMasterDataActionInput() *string
```

- *Type:* *string

---

##### `ServiceNowActionInput`<sup>Optional</sup> <a name="ServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowActionInput"></a>

```go
func ServiceNowActionInput() *string
```

- *Type:* *string

---

##### `ShareAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="ShareAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsActionInput"></a>

```go
func ShareAmazonBedrockArsActionInput() *string
```

- *Type:* *string

---

##### `ShareAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="ShareAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsActionInput"></a>

```go
func ShareAmazonBedrockFsActionInput() *string
```

- *Type:* *string

---

##### `ShareAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="ShareAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsActionInput"></a>

```go
func ShareAmazonBedrockKrsActionInput() *string
```

- *Type:* *string

---

##### `ShareAmazonSThreeActionInput`<sup>Optional</sup> <a name="ShareAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeActionInput"></a>

```go
func ShareAmazonSThreeActionInput() *string
```

- *Type:* *string

---

##### `ShareAnalysesInput`<sup>Optional</sup> <a name="ShareAnalysesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput"></a>

```go
func ShareAnalysesInput() *string
```

- *Type:* *string

---

##### `ShareAppsInput`<sup>Optional</sup> <a name="ShareAppsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAppsInput"></a>

```go
func ShareAppsInput() *string
```

- *Type:* *string

---

##### `ShareAsanaActionInput`<sup>Optional</sup> <a name="ShareAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaActionInput"></a>

```go
func ShareAsanaActionInput() *string
```

- *Type:* *string

---

##### `ShareBambooHrActionInput`<sup>Optional</sup> <a name="ShareBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrActionInput"></a>

```go
func ShareBambooHrActionInput() *string
```

- *Type:* *string

---

##### `ShareBoxAgentActionInput`<sup>Optional</sup> <a name="ShareBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentActionInput"></a>

```go
func ShareBoxAgentActionInput() *string
```

- *Type:* *string

---

##### `ShareCanvaAgentActionInput`<sup>Optional</sup> <a name="ShareCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentActionInput"></a>

```go
func ShareCanvaAgentActionInput() *string
```

- *Type:* *string

---

##### `ShareChatAgentsInput`<sup>Optional</sup> <a name="ShareChatAgentsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgentsInput"></a>

```go
func ShareChatAgentsInput() *string
```

- *Type:* *string

---

##### `ShareComprehendActionInput`<sup>Optional</sup> <a name="ShareComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendActionInput"></a>

```go
func ShareComprehendActionInput() *string
```

- *Type:* *string

---

##### `ShareComprehendMedicalActionInput`<sup>Optional</sup> <a name="ShareComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalActionInput"></a>

```go
func ShareComprehendMedicalActionInput() *string
```

- *Type:* *string

---

##### `ShareConfluenceActionInput`<sup>Optional</sup> <a name="ShareConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceActionInput"></a>

```go
func ShareConfluenceActionInput() *string
```

- *Type:* *string

---

##### `ShareDashboardsInput`<sup>Optional</sup> <a name="ShareDashboardsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput"></a>

```go
func ShareDashboardsInput() *string
```

- *Type:* *string

---

##### `ShareDatasetsInput`<sup>Optional</sup> <a name="ShareDatasetsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput"></a>

```go
func ShareDatasetsInput() *string
```

- *Type:* *string

---

##### `ShareDataSourcesInput`<sup>Optional</sup> <a name="ShareDataSourcesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput"></a>

```go
func ShareDataSourcesInput() *string
```

- *Type:* *string

---

##### `ShareFactSetActionInput`<sup>Optional</sup> <a name="ShareFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetActionInput"></a>

```go
func ShareFactSetActionInput() *string
```

- *Type:* *string

---

##### `ShareGenericHttpActionInput`<sup>Optional</sup> <a name="ShareGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpActionInput"></a>

```go
func ShareGenericHttpActionInput() *string
```

- *Type:* *string

---

##### `ShareGithubActionInput`<sup>Optional</sup> <a name="ShareGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubActionInput"></a>

```go
func ShareGithubActionInput() *string
```

- *Type:* *string

---

##### `ShareGoogleCalendarActionInput`<sup>Optional</sup> <a name="ShareGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarActionInput"></a>

```go
func ShareGoogleCalendarActionInput() *string
```

- *Type:* *string

---

##### `ShareHubspotActionInput`<sup>Optional</sup> <a name="ShareHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotActionInput"></a>

```go
func ShareHubspotActionInput() *string
```

- *Type:* *string

---

##### `ShareHuggingFaceActionInput`<sup>Optional</sup> <a name="ShareHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceActionInput"></a>

```go
func ShareHuggingFaceActionInput() *string
```

- *Type:* *string

---

##### `ShareIntercomActionInput`<sup>Optional</sup> <a name="ShareIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomActionInput"></a>

```go
func ShareIntercomActionInput() *string
```

- *Type:* *string

---

##### `ShareJiraActionInput`<sup>Optional</sup> <a name="ShareJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraActionInput"></a>

```go
func ShareJiraActionInput() *string
```

- *Type:* *string

---

##### `ShareKnowledgeBasesInput`<sup>Optional</sup> <a name="ShareKnowledgeBasesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBasesInput"></a>

```go
func ShareKnowledgeBasesInput() *string
```

- *Type:* *string

---

##### `ShareLinearActionInput`<sup>Optional</sup> <a name="ShareLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearActionInput"></a>

```go
func ShareLinearActionInput() *string
```

- *Type:* *string

---

##### `ShareMcpActionInput`<sup>Optional</sup> <a name="ShareMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpActionInput"></a>

```go
func ShareMcpActionInput() *string
```

- *Type:* *string

---

##### `ShareMondayActionInput`<sup>Optional</sup> <a name="ShareMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayActionInput"></a>

```go
func ShareMondayActionInput() *string
```

- *Type:* *string

---

##### `ShareMsExchangeActionInput`<sup>Optional</sup> <a name="ShareMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeActionInput"></a>

```go
func ShareMsExchangeActionInput() *string
```

- *Type:* *string

---

##### `ShareMsTeamsActionInput`<sup>Optional</sup> <a name="ShareMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsActionInput"></a>

```go
func ShareMsTeamsActionInput() *string
```

- *Type:* *string

---

##### `ShareNewRelicActionInput`<sup>Optional</sup> <a name="ShareNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicActionInput"></a>

```go
func ShareNewRelicActionInput() *string
```

- *Type:* *string

---

##### `ShareNotionActionInput`<sup>Optional</sup> <a name="ShareNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionActionInput"></a>

```go
func ShareNotionActionInput() *string
```

- *Type:* *string

---

##### `ShareOneDriveActionInput`<sup>Optional</sup> <a name="ShareOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveActionInput"></a>

```go
func ShareOneDriveActionInput() *string
```

- *Type:* *string

---

##### `ShareOpenApiActionInput`<sup>Optional</sup> <a name="ShareOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiActionInput"></a>

```go
func ShareOpenApiActionInput() *string
```

- *Type:* *string

---

##### `SharePagerDutyActionInput`<sup>Optional</sup> <a name="SharePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyActionInput"></a>

```go
func SharePagerDutyActionInput() *string
```

- *Type:* *string

---

##### `SharePointActionInput`<sup>Optional</sup> <a name="SharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointActionInput"></a>

```go
func SharePointActionInput() *string
```

- *Type:* *string

---

##### `ShareSalesforceActionInput`<sup>Optional</sup> <a name="ShareSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceActionInput"></a>

```go
func ShareSalesforceActionInput() *string
```

- *Type:* *string

---

##### `ShareSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="ShareSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyActionInput"></a>

```go
func ShareSandPGlobalEnergyActionInput() *string
```

- *Type:* *string

---

##### `ShareSandPgmiActionInput`<sup>Optional</sup> <a name="ShareSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiActionInput"></a>

```go
func ShareSandPgmiActionInput() *string
```

- *Type:* *string

---

##### `ShareSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="ShareSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialActionInput"></a>

```go
func ShareSapBillOfMaterialActionInput() *string
```

- *Type:* *string

---

##### `ShareSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="ShareSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerActionInput"></a>

```go
func ShareSapBusinessPartnerActionInput() *string
```

- *Type:* *string

---

##### `ShareSapMaterialStockActionInput`<sup>Optional</sup> <a name="ShareSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockActionInput"></a>

```go
func ShareSapMaterialStockActionInput() *string
```

- *Type:* *string

---

##### `ShareSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="ShareSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryActionInput"></a>

```go
func ShareSapPhysicalInventoryActionInput() *string
```

- *Type:* *string

---

##### `ShareSapProductMasterDataActionInput`<sup>Optional</sup> <a name="ShareSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataActionInput"></a>

```go
func ShareSapProductMasterDataActionInput() *string
```

- *Type:* *string

---

##### `ShareServiceNowActionInput`<sup>Optional</sup> <a name="ShareServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowActionInput"></a>

```go
func ShareServiceNowActionInput() *string
```

- *Type:* *string

---

##### `ShareSharePointActionInput`<sup>Optional</sup> <a name="ShareSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointActionInput"></a>

```go
func ShareSharePointActionInput() *string
```

- *Type:* *string

---

##### `ShareSlackActionInput`<sup>Optional</sup> <a name="ShareSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackActionInput"></a>

```go
func ShareSlackActionInput() *string
```

- *Type:* *string

---

##### `ShareSmartsheetActionInput`<sup>Optional</sup> <a name="ShareSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetActionInput"></a>

```go
func ShareSmartsheetActionInput() *string
```

- *Type:* *string

---

##### `ShareSpacesInput`<sup>Optional</sup> <a name="ShareSpacesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpacesInput"></a>

```go
func ShareSpacesInput() *string
```

- *Type:* *string

---

##### `ShareTextractActionInput`<sup>Optional</sup> <a name="ShareTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractActionInput"></a>

```go
func ShareTextractActionInput() *string
```

- *Type:* *string

---

##### `ShareZendeskActionInput`<sup>Optional</sup> <a name="ShareZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskActionInput"></a>

```go
func ShareZendeskActionInput() *string
```

- *Type:* *string

---

##### `SlackActionInput`<sup>Optional</sup> <a name="SlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackActionInput"></a>

```go
func SlackActionInput() *string
```

- *Type:* *string

---

##### `SmartsheetActionInput`<sup>Optional</sup> <a name="SmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetActionInput"></a>

```go
func SmartsheetActionInput() *string
```

- *Type:* *string

---

##### `SpaceInput`<sup>Optional</sup> <a name="SpaceInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.spaceInput"></a>

```go
func SpaceInput() *string
```

- *Type:* *string

---

##### `SubscribeDashboardEmailReportsInput`<sup>Optional</sup> <a name="SubscribeDashboardEmailReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput"></a>

```go
func SubscribeDashboardEmailReportsInput() *string
```

- *Type:* *string

---

##### `TextractActionInput`<sup>Optional</sup> <a name="TextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractActionInput"></a>

```go
func TextractActionInput() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `UseAgentWebSearchInput`<sup>Optional</sup> <a name="UseAgentWebSearchInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearchInput"></a>

```go
func UseAgentWebSearchInput() *string
```

- *Type:* *string

---

##### `UseAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="UseAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsActionInput"></a>

```go
func UseAmazonBedrockArsActionInput() *string
```

- *Type:* *string

---

##### `UseAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="UseAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsActionInput"></a>

```go
func UseAmazonBedrockFsActionInput() *string
```

- *Type:* *string

---

##### `UseAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="UseAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsActionInput"></a>

```go
func UseAmazonBedrockKrsActionInput() *string
```

- *Type:* *string

---

##### `UseAmazonSThreeActionInput`<sup>Optional</sup> <a name="UseAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeActionInput"></a>

```go
func UseAmazonSThreeActionInput() *string
```

- *Type:* *string

---

##### `UseAsanaActionInput`<sup>Optional</sup> <a name="UseAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaActionInput"></a>

```go
func UseAsanaActionInput() *string
```

- *Type:* *string

---

##### `UseBambooHrActionInput`<sup>Optional</sup> <a name="UseBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrActionInput"></a>

```go
func UseBambooHrActionInput() *string
```

- *Type:* *string

---

##### `UseBedrockModelsInput`<sup>Optional</sup> <a name="UseBedrockModelsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModelsInput"></a>

```go
func UseBedrockModelsInput() *string
```

- *Type:* *string

---

##### `UseBoxAgentActionInput`<sup>Optional</sup> <a name="UseBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentActionInput"></a>

```go
func UseBoxAgentActionInput() *string
```

- *Type:* *string

---

##### `UseCanvaAgentActionInput`<sup>Optional</sup> <a name="UseCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentActionInput"></a>

```go
func UseCanvaAgentActionInput() *string
```

- *Type:* *string

---

##### `UseComprehendActionInput`<sup>Optional</sup> <a name="UseComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendActionInput"></a>

```go
func UseComprehendActionInput() *string
```

- *Type:* *string

---

##### `UseComprehendMedicalActionInput`<sup>Optional</sup> <a name="UseComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalActionInput"></a>

```go
func UseComprehendMedicalActionInput() *string
```

- *Type:* *string

---

##### `UseConfluenceActionInput`<sup>Optional</sup> <a name="UseConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceActionInput"></a>

```go
func UseConfluenceActionInput() *string
```

- *Type:* *string

---

##### `UseFactSetActionInput`<sup>Optional</sup> <a name="UseFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetActionInput"></a>

```go
func UseFactSetActionInput() *string
```

- *Type:* *string

---

##### `UseGenericHttpActionInput`<sup>Optional</sup> <a name="UseGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpActionInput"></a>

```go
func UseGenericHttpActionInput() *string
```

- *Type:* *string

---

##### `UseGithubActionInput`<sup>Optional</sup> <a name="UseGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubActionInput"></a>

```go
func UseGithubActionInput() *string
```

- *Type:* *string

---

##### `UseGoogleCalendarActionInput`<sup>Optional</sup> <a name="UseGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarActionInput"></a>

```go
func UseGoogleCalendarActionInput() *string
```

- *Type:* *string

---

##### `UseHubspotActionInput`<sup>Optional</sup> <a name="UseHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotActionInput"></a>

```go
func UseHubspotActionInput() *string
```

- *Type:* *string

---

##### `UseHuggingFaceActionInput`<sup>Optional</sup> <a name="UseHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceActionInput"></a>

```go
func UseHuggingFaceActionInput() *string
```

- *Type:* *string

---

##### `UseIntercomActionInput`<sup>Optional</sup> <a name="UseIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomActionInput"></a>

```go
func UseIntercomActionInput() *string
```

- *Type:* *string

---

##### `UseJiraActionInput`<sup>Optional</sup> <a name="UseJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraActionInput"></a>

```go
func UseJiraActionInput() *string
```

- *Type:* *string

---

##### `UseLinearActionInput`<sup>Optional</sup> <a name="UseLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearActionInput"></a>

```go
func UseLinearActionInput() *string
```

- *Type:* *string

---

##### `UseMcpActionInput`<sup>Optional</sup> <a name="UseMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpActionInput"></a>

```go
func UseMcpActionInput() *string
```

- *Type:* *string

---

##### `UseMondayActionInput`<sup>Optional</sup> <a name="UseMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayActionInput"></a>

```go
func UseMondayActionInput() *string
```

- *Type:* *string

---

##### `UseMsExchangeActionInput`<sup>Optional</sup> <a name="UseMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeActionInput"></a>

```go
func UseMsExchangeActionInput() *string
```

- *Type:* *string

---

##### `UseMsTeamsActionInput`<sup>Optional</sup> <a name="UseMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsActionInput"></a>

```go
func UseMsTeamsActionInput() *string
```

- *Type:* *string

---

##### `UseNewRelicActionInput`<sup>Optional</sup> <a name="UseNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicActionInput"></a>

```go
func UseNewRelicActionInput() *string
```

- *Type:* *string

---

##### `UseNotionActionInput`<sup>Optional</sup> <a name="UseNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionActionInput"></a>

```go
func UseNotionActionInput() *string
```

- *Type:* *string

---

##### `UseOneDriveActionInput`<sup>Optional</sup> <a name="UseOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveActionInput"></a>

```go
func UseOneDriveActionInput() *string
```

- *Type:* *string

---

##### `UseOpenApiActionInput`<sup>Optional</sup> <a name="UseOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiActionInput"></a>

```go
func UseOpenApiActionInput() *string
```

- *Type:* *string

---

##### `UsePagerDutyActionInput`<sup>Optional</sup> <a name="UsePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyActionInput"></a>

```go
func UsePagerDutyActionInput() *string
```

- *Type:* *string

---

##### `UseSalesforceActionInput`<sup>Optional</sup> <a name="UseSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceActionInput"></a>

```go
func UseSalesforceActionInput() *string
```

- *Type:* *string

---

##### `UseSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="UseSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyActionInput"></a>

```go
func UseSandPGlobalEnergyActionInput() *string
```

- *Type:* *string

---

##### `UseSandPgmiActionInput`<sup>Optional</sup> <a name="UseSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiActionInput"></a>

```go
func UseSandPgmiActionInput() *string
```

- *Type:* *string

---

##### `UseSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="UseSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialActionInput"></a>

```go
func UseSapBillOfMaterialActionInput() *string
```

- *Type:* *string

---

##### `UseSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="UseSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerActionInput"></a>

```go
func UseSapBusinessPartnerActionInput() *string
```

- *Type:* *string

---

##### `UseSapMaterialStockActionInput`<sup>Optional</sup> <a name="UseSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockActionInput"></a>

```go
func UseSapMaterialStockActionInput() *string
```

- *Type:* *string

---

##### `UseSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="UseSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryActionInput"></a>

```go
func UseSapPhysicalInventoryActionInput() *string
```

- *Type:* *string

---

##### `UseSapProductMasterDataActionInput`<sup>Optional</sup> <a name="UseSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataActionInput"></a>

```go
func UseSapProductMasterDataActionInput() *string
```

- *Type:* *string

---

##### `UseServiceNowActionInput`<sup>Optional</sup> <a name="UseServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowActionInput"></a>

```go
func UseServiceNowActionInput() *string
```

- *Type:* *string

---

##### `UseSharePointActionInput`<sup>Optional</sup> <a name="UseSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointActionInput"></a>

```go
func UseSharePointActionInput() *string
```

- *Type:* *string

---

##### `UseSlackActionInput`<sup>Optional</sup> <a name="UseSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackActionInput"></a>

```go
func UseSlackActionInput() *string
```

- *Type:* *string

---

##### `UseSmartsheetActionInput`<sup>Optional</sup> <a name="UseSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetActionInput"></a>

```go
func UseSmartsheetActionInput() *string
```

- *Type:* *string

---

##### `UseTextractActionInput`<sup>Optional</sup> <a name="UseTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractActionInput"></a>

```go
func UseTextractActionInput() *string
```

- *Type:* *string

---

##### `UseZendeskActionInput`<sup>Optional</sup> <a name="UseZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskActionInput"></a>

```go
func UseZendeskActionInput() *string
```

- *Type:* *string

---

##### `ViewAccountSpiceCapacityInput`<sup>Optional</sup> <a name="ViewAccountSpiceCapacityInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput"></a>

```go
func ViewAccountSpiceCapacityInput() *string
```

- *Type:* *string

---

##### `ZendeskActionInput`<sup>Optional</sup> <a name="ZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskActionInput"></a>

```go
func ZendeskActionInput() *string
```

- *Type:* *string

---

##### `AccessAppsNativeDataStore`<sup>Required</sup> <a name="AccessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore"></a>

```go
func AccessAppsNativeDataStore() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `AddOrRunAnomalyDetectionForAnalyses`<sup>Required</sup> <a name="AddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```go
func AddOrRunAnomalyDetectionForAnalyses() *string
```

- *Type:* *string

---

##### `AmazonBedrockArsAction`<sup>Required</sup> <a name="AmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction"></a>

```go
func AmazonBedrockArsAction() *string
```

- *Type:* *string

---

##### `AmazonBedrockFsAction`<sup>Required</sup> <a name="AmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction"></a>

```go
func AmazonBedrockFsAction() *string
```

- *Type:* *string

---

##### `AmazonBedrockKrsAction`<sup>Required</sup> <a name="AmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction"></a>

```go
func AmazonBedrockKrsAction() *string
```

- *Type:* *string

---

##### `AmazonSThreeAction`<sup>Required</sup> <a name="AmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction"></a>

```go
func AmazonSThreeAction() *string
```

- *Type:* *string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis"></a>

```go
func Analysis() *string
```

- *Type:* *string

---

##### `ApproveFlowShareRequests`<sup>Required</sup> <a name="ApproveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests"></a>

```go
func ApproveFlowShareRequests() *string
```

- *Type:* *string

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.apps"></a>

```go
func Apps() *string
```

- *Type:* *string

---

##### `AsanaAction`<sup>Required</sup> <a name="AsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction"></a>

```go
func AsanaAction() *string
```

- *Type:* *string

---

##### `Automate`<sup>Required</sup> <a name="Automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automate"></a>

```go
func Automate() *string
```

- *Type:* *string

---

##### `BambooHrAction`<sup>Required</sup> <a name="BambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction"></a>

```go
func BambooHrAction() *string
```

- *Type:* *string

---

##### `BoxAgentAction`<sup>Required</sup> <a name="BoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction"></a>

```go
func BoxAgentAction() *string
```

- *Type:* *string

---

##### `BuildCalculatedFieldWithQ`<sup>Required</sup> <a name="BuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ"></a>

```go
func BuildCalculatedFieldWithQ() *string
```

- *Type:* *string

---

##### `CanvaAgentAction`<sup>Required</sup> <a name="CanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction"></a>

```go
func CanvaAgentAction() *string
```

- *Type:* *string

---

##### `ChatAgent`<sup>Required</sup> <a name="ChatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent"></a>

```go
func ChatAgent() *string
```

- *Type:* *string

---

##### `ComprehendAction`<sup>Required</sup> <a name="ComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction"></a>

```go
func ComprehendAction() *string
```

- *Type:* *string

---

##### `ComprehendMedicalAction`<sup>Required</sup> <a name="ComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction"></a>

```go
func ComprehendMedicalAction() *string
```

- *Type:* *string

---

##### `ConfluenceAction`<sup>Required</sup> <a name="ConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction"></a>

```go
func ConfluenceAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonBedrockArsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction"></a>

```go
func CreateAndUpdateAmazonBedrockArsAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonBedrockFsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction"></a>

```go
func CreateAndUpdateAmazonBedrockFsAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonBedrockKrsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction"></a>

```go
func CreateAndUpdateAmazonBedrockKrsAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAmazonSThreeAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction"></a>

```go
func CreateAndUpdateAmazonSThreeAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateApps`<sup>Required</sup> <a name="CreateAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps"></a>

```go
func CreateAndUpdateApps() *string
```

- *Type:* *string

---

##### `CreateAndUpdateAsanaAction`<sup>Required</sup> <a name="CreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction"></a>

```go
func CreateAndUpdateAsanaAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateBambooHrAction`<sup>Required</sup> <a name="CreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction"></a>

```go
func CreateAndUpdateBambooHrAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateBoxAgentAction`<sup>Required</sup> <a name="CreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction"></a>

```go
func CreateAndUpdateBoxAgentAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateCanvaAgentAction`<sup>Required</sup> <a name="CreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction"></a>

```go
func CreateAndUpdateCanvaAgentAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateComprehendAction`<sup>Required</sup> <a name="CreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction"></a>

```go
func CreateAndUpdateComprehendAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateComprehendMedicalAction`<sup>Required</sup> <a name="CreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction"></a>

```go
func CreateAndUpdateComprehendMedicalAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateConfluenceAction`<sup>Required</sup> <a name="CreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction"></a>

```go
func CreateAndUpdateConfluenceAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateDashboardEmailReports`<sup>Required</sup> <a name="CreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```go
func CreateAndUpdateDashboardEmailReports() *string
```

- *Type:* *string

---

##### `CreateAndUpdateDatasets`<sup>Required</sup> <a name="CreateAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```go
func CreateAndUpdateDatasets() *string
```

- *Type:* *string

---

##### `CreateAndUpdateDataSources`<sup>Required</sup> <a name="CreateAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```go
func CreateAndUpdateDataSources() *string
```

- *Type:* *string

---

##### `CreateAndUpdateFactSetAction`<sup>Required</sup> <a name="CreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction"></a>

```go
func CreateAndUpdateFactSetAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateGenericHttpAction`<sup>Required</sup> <a name="CreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction"></a>

```go
func CreateAndUpdateGenericHttpAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateGithubAction`<sup>Required</sup> <a name="CreateAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction"></a>

```go
func CreateAndUpdateGithubAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateGoogleCalendarAction`<sup>Required</sup> <a name="CreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction"></a>

```go
func CreateAndUpdateGoogleCalendarAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateHubspotAction`<sup>Required</sup> <a name="CreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction"></a>

```go
func CreateAndUpdateHubspotAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateHuggingFaceAction`<sup>Required</sup> <a name="CreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction"></a>

```go
func CreateAndUpdateHuggingFaceAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateIntercomAction`<sup>Required</sup> <a name="CreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction"></a>

```go
func CreateAndUpdateIntercomAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateJiraAction`<sup>Required</sup> <a name="CreateAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction"></a>

```go
func CreateAndUpdateJiraAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateKnowledgeBases`<sup>Required</sup> <a name="CreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases"></a>

```go
func CreateAndUpdateKnowledgeBases() *string
```

- *Type:* *string

---

##### `CreateAndUpdateLinearAction`<sup>Required</sup> <a name="CreateAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction"></a>

```go
func CreateAndUpdateLinearAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMcpAction`<sup>Required</sup> <a name="CreateAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction"></a>

```go
func CreateAndUpdateMcpAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMondayAction`<sup>Required</sup> <a name="CreateAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction"></a>

```go
func CreateAndUpdateMondayAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMsExchangeAction`<sup>Required</sup> <a name="CreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction"></a>

```go
func CreateAndUpdateMsExchangeAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateMsTeamsAction`<sup>Required</sup> <a name="CreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction"></a>

```go
func CreateAndUpdateMsTeamsAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateNewRelicAction`<sup>Required</sup> <a name="CreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction"></a>

```go
func CreateAndUpdateNewRelicAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateNotionAction`<sup>Required</sup> <a name="CreateAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction"></a>

```go
func CreateAndUpdateNotionAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateOneDriveAction`<sup>Required</sup> <a name="CreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction"></a>

```go
func CreateAndUpdateOneDriveAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateOpenApiAction`<sup>Required</sup> <a name="CreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction"></a>

```go
func CreateAndUpdateOpenApiAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdatePagerDutyAction`<sup>Required</sup> <a name="CreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction"></a>

```go
func CreateAndUpdatePagerDutyAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSalesforceAction`<sup>Required</sup> <a name="CreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction"></a>

```go
func CreateAndUpdateSalesforceAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSandPGlobalEnergyAction`<sup>Required</sup> <a name="CreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction"></a>

```go
func CreateAndUpdateSandPGlobalEnergyAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSandPgmiAction`<sup>Required</sup> <a name="CreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction"></a>

```go
func CreateAndUpdateSandPgmiAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapBillOfMaterialAction`<sup>Required</sup> <a name="CreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction"></a>

```go
func CreateAndUpdateSapBillOfMaterialAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapBusinessPartnerAction`<sup>Required</sup> <a name="CreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction"></a>

```go
func CreateAndUpdateSapBusinessPartnerAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapMaterialStockAction`<sup>Required</sup> <a name="CreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction"></a>

```go
func CreateAndUpdateSapMaterialStockAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapPhysicalInventoryAction`<sup>Required</sup> <a name="CreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction"></a>

```go
func CreateAndUpdateSapPhysicalInventoryAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSapProductMasterDataAction`<sup>Required</sup> <a name="CreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction"></a>

```go
func CreateAndUpdateSapProductMasterDataAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateServiceNowAction`<sup>Required</sup> <a name="CreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction"></a>

```go
func CreateAndUpdateServiceNowAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSharePointAction`<sup>Required</sup> <a name="CreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction"></a>

```go
func CreateAndUpdateSharePointAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSlackAction`<sup>Required</sup> <a name="CreateAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction"></a>

```go
func CreateAndUpdateSlackAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateSmartsheetAction`<sup>Required</sup> <a name="CreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction"></a>

```go
func CreateAndUpdateSmartsheetAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateTextractAction`<sup>Required</sup> <a name="CreateAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction"></a>

```go
func CreateAndUpdateTextractAction() *string
```

- *Type:* *string

---

##### `CreateAndUpdateThemes`<sup>Required</sup> <a name="CreateAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```go
func CreateAndUpdateThemes() *string
```

- *Type:* *string

---

##### `CreateAndUpdateThresholdAlerts`<sup>Required</sup> <a name="CreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```go
func CreateAndUpdateThresholdAlerts() *string
```

- *Type:* *string

---

##### `CreateAndUpdateZendeskAction`<sup>Required</sup> <a name="CreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction"></a>

```go
func CreateAndUpdateZendeskAction() *string
```

- *Type:* *string

---

##### `CreateChatAgents`<sup>Required</sup> <a name="CreateChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents"></a>

```go
func CreateChatAgents() *string
```

- *Type:* *string

---

##### `CreateDashboardExecutiveSummaryWithQ`<sup>Required</sup> <a name="CreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ"></a>

```go
func CreateDashboardExecutiveSummaryWithQ() *string
```

- *Type:* *string

---

##### `CreateSharedFolders`<sup>Required</sup> <a name="CreateSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```go
func CreateSharedFolders() *string
```

- *Type:* *string

---

##### `CreateSpaces`<sup>Required</sup> <a name="CreateSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces"></a>

```go
func CreateSpaces() *string
```

- *Type:* *string

---

##### `CreateSpiceDataset`<sup>Required</sup> <a name="CreateSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```go
func CreateSpiceDataset() *string
```

- *Type:* *string

---

##### `Dashboard`<sup>Required</sup> <a name="Dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard"></a>

```go
func Dashboard() *string
```

- *Type:* *string

---

##### `EditVisualWithQ`<sup>Required</sup> <a name="EditVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ"></a>

```go
func EditVisualWithQ() *string
```

- *Type:* *string

---

##### `ExportToCsv`<sup>Required</sup> <a name="ExportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```go
func ExportToCsv() *string
```

- *Type:* *string

---

##### `ExportToCsvInScheduledReports`<sup>Required</sup> <a name="ExportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```go
func ExportToCsvInScheduledReports() *string
```

- *Type:* *string

---

##### `ExportToExcel`<sup>Required</sup> <a name="ExportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```go
func ExportToExcel() *string
```

- *Type:* *string

---

##### `ExportToExcelInScheduledReports`<sup>Required</sup> <a name="ExportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```go
func ExportToExcelInScheduledReports() *string
```

- *Type:* *string

---

##### `ExportToPdf`<sup>Required</sup> <a name="ExportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```go
func ExportToPdf() *string
```

- *Type:* *string

---

##### `ExportToPdfInScheduledReports`<sup>Required</sup> <a name="ExportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```go
func ExportToPdfInScheduledReports() *string
```

- *Type:* *string

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extension"></a>

```go
func Extension() *string
```

- *Type:* *string

---

##### `FactSetAction`<sup>Required</sup> <a name="FactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction"></a>

```go
func FactSetAction() *string
```

- *Type:* *string

---

##### `Flow`<sup>Required</sup> <a name="Flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flow"></a>

```go
func Flow() *string
```

- *Type:* *string

---

##### `GenericHttpAction`<sup>Required</sup> <a name="GenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction"></a>

```go
func GenericHttpAction() *string
```

- *Type:* *string

---

##### `GithubAction`<sup>Required</sup> <a name="GithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction"></a>

```go
func GithubAction() *string
```

- *Type:* *string

---

##### `GoogleCalendarAction`<sup>Required</sup> <a name="GoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction"></a>

```go
func GoogleCalendarAction() *string
```

- *Type:* *string

---

##### `HubspotAction`<sup>Required</sup> <a name="HubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction"></a>

```go
func HubspotAction() *string
```

- *Type:* *string

---

##### `HuggingFaceAction`<sup>Required</sup> <a name="HuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction"></a>

```go
func HuggingFaceAction() *string
```

- *Type:* *string

---

##### `IncludeContentInScheduledReportsEmail`<sup>Required</sup> <a name="IncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```go
func IncludeContentInScheduledReportsEmail() *string
```

- *Type:* *string

---

##### `IntercomAction`<sup>Required</sup> <a name="IntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction"></a>

```go
func IntercomAction() *string
```

- *Type:* *string

---

##### `InvokeAppsAiInference`<sup>Required</sup> <a name="InvokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference"></a>

```go
func InvokeAppsAiInference() *string
```

- *Type:* *string

---

##### `JiraAction`<sup>Required</sup> <a name="JiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction"></a>

```go
func JiraAction() *string
```

- *Type:* *string

---

##### `KnowledgeBase`<sup>Required</sup> <a name="KnowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase"></a>

```go
func KnowledgeBase() *string
```

- *Type:* *string

---

##### `LinearAction`<sup>Required</sup> <a name="LinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction"></a>

```go
func LinearAction() *string
```

- *Type:* *string

---

##### `ManageSharedFolders`<sup>Required</sup> <a name="ManageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders"></a>

```go
func ManageSharedFolders() *string
```

- *Type:* *string

---

##### `McpAction`<sup>Required</sup> <a name="McpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction"></a>

```go
func McpAction() *string
```

- *Type:* *string

---

##### `MondayAction`<sup>Required</sup> <a name="MondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction"></a>

```go
func MondayAction() *string
```

- *Type:* *string

---

##### `MsExchangeAction`<sup>Required</sup> <a name="MsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction"></a>

```go
func MsExchangeAction() *string
```

- *Type:* *string

---

##### `MsTeamsAction`<sup>Required</sup> <a name="MsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction"></a>

```go
func MsTeamsAction() *string
```

- *Type:* *string

---

##### `NewRelicAction`<sup>Required</sup> <a name="NewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction"></a>

```go
func NewRelicAction() *string
```

- *Type:* *string

---

##### `NotionAction`<sup>Required</sup> <a name="NotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction"></a>

```go
func NotionAction() *string
```

- *Type:* *string

---

##### `OneDriveAction`<sup>Required</sup> <a name="OneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction"></a>

```go
func OneDriveAction() *string
```

- *Type:* *string

---

##### `OpenApiAction`<sup>Required</sup> <a name="OpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction"></a>

```go
func OpenApiAction() *string
```

- *Type:* *string

---

##### `PagerDutyAction`<sup>Required</sup> <a name="PagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction"></a>

```go
func PagerDutyAction() *string
```

- *Type:* *string

---

##### `PerformFlowUiTask`<sup>Required</sup> <a name="PerformFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask"></a>

```go
func PerformFlowUiTask() *string
```

- *Type:* *string

---

##### `PrintReports`<sup>Required</sup> <a name="PrintReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```go
func PrintReports() *string
```

- *Type:* *string

---

##### `PublishWithoutApproval`<sup>Required</sup> <a name="PublishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval"></a>

```go
func PublishWithoutApproval() *string
```

- *Type:* *string

---

##### `RenameSharedFolders`<sup>Required</sup> <a name="RenameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```go
func RenameSharedFolders() *string
```

- *Type:* *string

---

##### `Research`<sup>Required</sup> <a name="Research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.research"></a>

```go
func Research() *string
```

- *Type:* *string

---

##### `SalesforceAction`<sup>Required</sup> <a name="SalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction"></a>

```go
func SalesforceAction() *string
```

- *Type:* *string

---

##### `SandPGlobalEnergyAction`<sup>Required</sup> <a name="SandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction"></a>

```go
func SandPGlobalEnergyAction() *string
```

- *Type:* *string

---

##### `SandPgmiAction`<sup>Required</sup> <a name="SandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction"></a>

```go
func SandPgmiAction() *string
```

- *Type:* *string

---

##### `SapBillOfMaterialAction`<sup>Required</sup> <a name="SapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction"></a>

```go
func SapBillOfMaterialAction() *string
```

- *Type:* *string

---

##### `SapBusinessPartnerAction`<sup>Required</sup> <a name="SapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction"></a>

```go
func SapBusinessPartnerAction() *string
```

- *Type:* *string

---

##### `SapMaterialStockAction`<sup>Required</sup> <a name="SapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction"></a>

```go
func SapMaterialStockAction() *string
```

- *Type:* *string

---

##### `SapPhysicalInventoryAction`<sup>Required</sup> <a name="SapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction"></a>

```go
func SapPhysicalInventoryAction() *string
```

- *Type:* *string

---

##### `SapProductMasterDataAction`<sup>Required</sup> <a name="SapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction"></a>

```go
func SapProductMasterDataAction() *string
```

- *Type:* *string

---

##### `ServiceNowAction`<sup>Required</sup> <a name="ServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction"></a>

```go
func ServiceNowAction() *string
```

- *Type:* *string

---

##### `ShareAmazonBedrockArsAction`<sup>Required</sup> <a name="ShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction"></a>

```go
func ShareAmazonBedrockArsAction() *string
```

- *Type:* *string

---

##### `ShareAmazonBedrockFsAction`<sup>Required</sup> <a name="ShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction"></a>

```go
func ShareAmazonBedrockFsAction() *string
```

- *Type:* *string

---

##### `ShareAmazonBedrockKrsAction`<sup>Required</sup> <a name="ShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction"></a>

```go
func ShareAmazonBedrockKrsAction() *string
```

- *Type:* *string

---

##### `ShareAmazonSThreeAction`<sup>Required</sup> <a name="ShareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction"></a>

```go
func ShareAmazonSThreeAction() *string
```

- *Type:* *string

---

##### `ShareAnalyses`<sup>Required</sup> <a name="ShareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```go
func ShareAnalyses() *string
```

- *Type:* *string

---

##### `ShareApps`<sup>Required</sup> <a name="ShareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps"></a>

```go
func ShareApps() *string
```

- *Type:* *string

---

##### `ShareAsanaAction`<sup>Required</sup> <a name="ShareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction"></a>

```go
func ShareAsanaAction() *string
```

- *Type:* *string

---

##### `ShareBambooHrAction`<sup>Required</sup> <a name="ShareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction"></a>

```go
func ShareBambooHrAction() *string
```

- *Type:* *string

---

##### `ShareBoxAgentAction`<sup>Required</sup> <a name="ShareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction"></a>

```go
func ShareBoxAgentAction() *string
```

- *Type:* *string

---

##### `ShareCanvaAgentAction`<sup>Required</sup> <a name="ShareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction"></a>

```go
func ShareCanvaAgentAction() *string
```

- *Type:* *string

---

##### `ShareChatAgents`<sup>Required</sup> <a name="ShareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents"></a>

```go
func ShareChatAgents() *string
```

- *Type:* *string

---

##### `ShareComprehendAction`<sup>Required</sup> <a name="ShareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction"></a>

```go
func ShareComprehendAction() *string
```

- *Type:* *string

---

##### `ShareComprehendMedicalAction`<sup>Required</sup> <a name="ShareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction"></a>

```go
func ShareComprehendMedicalAction() *string
```

- *Type:* *string

---

##### `ShareConfluenceAction`<sup>Required</sup> <a name="ShareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction"></a>

```go
func ShareConfluenceAction() *string
```

- *Type:* *string

---

##### `ShareDashboards`<sup>Required</sup> <a name="ShareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```go
func ShareDashboards() *string
```

- *Type:* *string

---

##### `ShareDatasets`<sup>Required</sup> <a name="ShareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```go
func ShareDatasets() *string
```

- *Type:* *string

---

##### `ShareDataSources`<sup>Required</sup> <a name="ShareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```go
func ShareDataSources() *string
```

- *Type:* *string

---

##### `ShareFactSetAction`<sup>Required</sup> <a name="ShareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction"></a>

```go
func ShareFactSetAction() *string
```

- *Type:* *string

---

##### `ShareGenericHttpAction`<sup>Required</sup> <a name="ShareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction"></a>

```go
func ShareGenericHttpAction() *string
```

- *Type:* *string

---

##### `ShareGithubAction`<sup>Required</sup> <a name="ShareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction"></a>

```go
func ShareGithubAction() *string
```

- *Type:* *string

---

##### `ShareGoogleCalendarAction`<sup>Required</sup> <a name="ShareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction"></a>

```go
func ShareGoogleCalendarAction() *string
```

- *Type:* *string

---

##### `ShareHubspotAction`<sup>Required</sup> <a name="ShareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction"></a>

```go
func ShareHubspotAction() *string
```

- *Type:* *string

---

##### `ShareHuggingFaceAction`<sup>Required</sup> <a name="ShareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction"></a>

```go
func ShareHuggingFaceAction() *string
```

- *Type:* *string

---

##### `ShareIntercomAction`<sup>Required</sup> <a name="ShareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction"></a>

```go
func ShareIntercomAction() *string
```

- *Type:* *string

---

##### `ShareJiraAction`<sup>Required</sup> <a name="ShareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction"></a>

```go
func ShareJiraAction() *string
```

- *Type:* *string

---

##### `ShareKnowledgeBases`<sup>Required</sup> <a name="ShareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases"></a>

```go
func ShareKnowledgeBases() *string
```

- *Type:* *string

---

##### `ShareLinearAction`<sup>Required</sup> <a name="ShareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction"></a>

```go
func ShareLinearAction() *string
```

- *Type:* *string

---

##### `ShareMcpAction`<sup>Required</sup> <a name="ShareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction"></a>

```go
func ShareMcpAction() *string
```

- *Type:* *string

---

##### `ShareMondayAction`<sup>Required</sup> <a name="ShareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction"></a>

```go
func ShareMondayAction() *string
```

- *Type:* *string

---

##### `ShareMsExchangeAction`<sup>Required</sup> <a name="ShareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction"></a>

```go
func ShareMsExchangeAction() *string
```

- *Type:* *string

---

##### `ShareMsTeamsAction`<sup>Required</sup> <a name="ShareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction"></a>

```go
func ShareMsTeamsAction() *string
```

- *Type:* *string

---

##### `ShareNewRelicAction`<sup>Required</sup> <a name="ShareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction"></a>

```go
func ShareNewRelicAction() *string
```

- *Type:* *string

---

##### `ShareNotionAction`<sup>Required</sup> <a name="ShareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction"></a>

```go
func ShareNotionAction() *string
```

- *Type:* *string

---

##### `ShareOneDriveAction`<sup>Required</sup> <a name="ShareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction"></a>

```go
func ShareOneDriveAction() *string
```

- *Type:* *string

---

##### `ShareOpenApiAction`<sup>Required</sup> <a name="ShareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction"></a>

```go
func ShareOpenApiAction() *string
```

- *Type:* *string

---

##### `SharePagerDutyAction`<sup>Required</sup> <a name="SharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction"></a>

```go
func SharePagerDutyAction() *string
```

- *Type:* *string

---

##### `SharePointAction`<sup>Required</sup> <a name="SharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction"></a>

```go
func SharePointAction() *string
```

- *Type:* *string

---

##### `ShareSalesforceAction`<sup>Required</sup> <a name="ShareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction"></a>

```go
func ShareSalesforceAction() *string
```

- *Type:* *string

---

##### `ShareSandPGlobalEnergyAction`<sup>Required</sup> <a name="ShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction"></a>

```go
func ShareSandPGlobalEnergyAction() *string
```

- *Type:* *string

---

##### `ShareSandPgmiAction`<sup>Required</sup> <a name="ShareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction"></a>

```go
func ShareSandPgmiAction() *string
```

- *Type:* *string

---

##### `ShareSapBillOfMaterialAction`<sup>Required</sup> <a name="ShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction"></a>

```go
func ShareSapBillOfMaterialAction() *string
```

- *Type:* *string

---

##### `ShareSapBusinessPartnerAction`<sup>Required</sup> <a name="ShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction"></a>

```go
func ShareSapBusinessPartnerAction() *string
```

- *Type:* *string

---

##### `ShareSapMaterialStockAction`<sup>Required</sup> <a name="ShareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction"></a>

```go
func ShareSapMaterialStockAction() *string
```

- *Type:* *string

---

##### `ShareSapPhysicalInventoryAction`<sup>Required</sup> <a name="ShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction"></a>

```go
func ShareSapPhysicalInventoryAction() *string
```

- *Type:* *string

---

##### `ShareSapProductMasterDataAction`<sup>Required</sup> <a name="ShareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction"></a>

```go
func ShareSapProductMasterDataAction() *string
```

- *Type:* *string

---

##### `ShareServiceNowAction`<sup>Required</sup> <a name="ShareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction"></a>

```go
func ShareServiceNowAction() *string
```

- *Type:* *string

---

##### `ShareSharePointAction`<sup>Required</sup> <a name="ShareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction"></a>

```go
func ShareSharePointAction() *string
```

- *Type:* *string

---

##### `ShareSlackAction`<sup>Required</sup> <a name="ShareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction"></a>

```go
func ShareSlackAction() *string
```

- *Type:* *string

---

##### `ShareSmartsheetAction`<sup>Required</sup> <a name="ShareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction"></a>

```go
func ShareSmartsheetAction() *string
```

- *Type:* *string

---

##### `ShareSpaces`<sup>Required</sup> <a name="ShareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces"></a>

```go
func ShareSpaces() *string
```

- *Type:* *string

---

##### `ShareTextractAction`<sup>Required</sup> <a name="ShareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction"></a>

```go
func ShareTextractAction() *string
```

- *Type:* *string

---

##### `ShareZendeskAction`<sup>Required</sup> <a name="ShareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction"></a>

```go
func ShareZendeskAction() *string
```

- *Type:* *string

---

##### `SlackAction`<sup>Required</sup> <a name="SlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction"></a>

```go
func SlackAction() *string
```

- *Type:* *string

---

##### `SmartsheetAction`<sup>Required</sup> <a name="SmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction"></a>

```go
func SmartsheetAction() *string
```

- *Type:* *string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.space"></a>

```go
func Space() *string
```

- *Type:* *string

---

##### `SubscribeDashboardEmailReports`<sup>Required</sup> <a name="SubscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```go
func SubscribeDashboardEmailReports() *string
```

- *Type:* *string

---

##### `TextractAction`<sup>Required</sup> <a name="TextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction"></a>

```go
func TextractAction() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `UseAgentWebSearch`<sup>Required</sup> <a name="UseAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch"></a>

```go
func UseAgentWebSearch() *string
```

- *Type:* *string

---

##### `UseAmazonBedrockArsAction`<sup>Required</sup> <a name="UseAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction"></a>

```go
func UseAmazonBedrockArsAction() *string
```

- *Type:* *string

---

##### `UseAmazonBedrockFsAction`<sup>Required</sup> <a name="UseAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction"></a>

```go
func UseAmazonBedrockFsAction() *string
```

- *Type:* *string

---

##### `UseAmazonBedrockKrsAction`<sup>Required</sup> <a name="UseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction"></a>

```go
func UseAmazonBedrockKrsAction() *string
```

- *Type:* *string

---

##### `UseAmazonSThreeAction`<sup>Required</sup> <a name="UseAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction"></a>

```go
func UseAmazonSThreeAction() *string
```

- *Type:* *string

---

##### `UseAsanaAction`<sup>Required</sup> <a name="UseAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction"></a>

```go
func UseAsanaAction() *string
```

- *Type:* *string

---

##### `UseBambooHrAction`<sup>Required</sup> <a name="UseBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction"></a>

```go
func UseBambooHrAction() *string
```

- *Type:* *string

---

##### `UseBedrockModels`<sup>Required</sup> <a name="UseBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels"></a>

```go
func UseBedrockModels() *string
```

- *Type:* *string

---

##### `UseBoxAgentAction`<sup>Required</sup> <a name="UseBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction"></a>

```go
func UseBoxAgentAction() *string
```

- *Type:* *string

---

##### `UseCanvaAgentAction`<sup>Required</sup> <a name="UseCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction"></a>

```go
func UseCanvaAgentAction() *string
```

- *Type:* *string

---

##### `UseComprehendAction`<sup>Required</sup> <a name="UseComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction"></a>

```go
func UseComprehendAction() *string
```

- *Type:* *string

---

##### `UseComprehendMedicalAction`<sup>Required</sup> <a name="UseComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction"></a>

```go
func UseComprehendMedicalAction() *string
```

- *Type:* *string

---

##### `UseConfluenceAction`<sup>Required</sup> <a name="UseConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction"></a>

```go
func UseConfluenceAction() *string
```

- *Type:* *string

---

##### `UseFactSetAction`<sup>Required</sup> <a name="UseFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction"></a>

```go
func UseFactSetAction() *string
```

- *Type:* *string

---

##### `UseGenericHttpAction`<sup>Required</sup> <a name="UseGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction"></a>

```go
func UseGenericHttpAction() *string
```

- *Type:* *string

---

##### `UseGithubAction`<sup>Required</sup> <a name="UseGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction"></a>

```go
func UseGithubAction() *string
```

- *Type:* *string

---

##### `UseGoogleCalendarAction`<sup>Required</sup> <a name="UseGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction"></a>

```go
func UseGoogleCalendarAction() *string
```

- *Type:* *string

---

##### `UseHubspotAction`<sup>Required</sup> <a name="UseHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction"></a>

```go
func UseHubspotAction() *string
```

- *Type:* *string

---

##### `UseHuggingFaceAction`<sup>Required</sup> <a name="UseHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction"></a>

```go
func UseHuggingFaceAction() *string
```

- *Type:* *string

---

##### `UseIntercomAction`<sup>Required</sup> <a name="UseIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction"></a>

```go
func UseIntercomAction() *string
```

- *Type:* *string

---

##### `UseJiraAction`<sup>Required</sup> <a name="UseJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction"></a>

```go
func UseJiraAction() *string
```

- *Type:* *string

---

##### `UseLinearAction`<sup>Required</sup> <a name="UseLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction"></a>

```go
func UseLinearAction() *string
```

- *Type:* *string

---

##### `UseMcpAction`<sup>Required</sup> <a name="UseMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction"></a>

```go
func UseMcpAction() *string
```

- *Type:* *string

---

##### `UseMondayAction`<sup>Required</sup> <a name="UseMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction"></a>

```go
func UseMondayAction() *string
```

- *Type:* *string

---

##### `UseMsExchangeAction`<sup>Required</sup> <a name="UseMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction"></a>

```go
func UseMsExchangeAction() *string
```

- *Type:* *string

---

##### `UseMsTeamsAction`<sup>Required</sup> <a name="UseMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction"></a>

```go
func UseMsTeamsAction() *string
```

- *Type:* *string

---

##### `UseNewRelicAction`<sup>Required</sup> <a name="UseNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction"></a>

```go
func UseNewRelicAction() *string
```

- *Type:* *string

---

##### `UseNotionAction`<sup>Required</sup> <a name="UseNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction"></a>

```go
func UseNotionAction() *string
```

- *Type:* *string

---

##### `UseOneDriveAction`<sup>Required</sup> <a name="UseOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction"></a>

```go
func UseOneDriveAction() *string
```

- *Type:* *string

---

##### `UseOpenApiAction`<sup>Required</sup> <a name="UseOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction"></a>

```go
func UseOpenApiAction() *string
```

- *Type:* *string

---

##### `UsePagerDutyAction`<sup>Required</sup> <a name="UsePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction"></a>

```go
func UsePagerDutyAction() *string
```

- *Type:* *string

---

##### `UseSalesforceAction`<sup>Required</sup> <a name="UseSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction"></a>

```go
func UseSalesforceAction() *string
```

- *Type:* *string

---

##### `UseSandPGlobalEnergyAction`<sup>Required</sup> <a name="UseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction"></a>

```go
func UseSandPGlobalEnergyAction() *string
```

- *Type:* *string

---

##### `UseSandPgmiAction`<sup>Required</sup> <a name="UseSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction"></a>

```go
func UseSandPgmiAction() *string
```

- *Type:* *string

---

##### `UseSapBillOfMaterialAction`<sup>Required</sup> <a name="UseSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction"></a>

```go
func UseSapBillOfMaterialAction() *string
```

- *Type:* *string

---

##### `UseSapBusinessPartnerAction`<sup>Required</sup> <a name="UseSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction"></a>

```go
func UseSapBusinessPartnerAction() *string
```

- *Type:* *string

---

##### `UseSapMaterialStockAction`<sup>Required</sup> <a name="UseSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction"></a>

```go
func UseSapMaterialStockAction() *string
```

- *Type:* *string

---

##### `UseSapPhysicalInventoryAction`<sup>Required</sup> <a name="UseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction"></a>

```go
func UseSapPhysicalInventoryAction() *string
```

- *Type:* *string

---

##### `UseSapProductMasterDataAction`<sup>Required</sup> <a name="UseSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction"></a>

```go
func UseSapProductMasterDataAction() *string
```

- *Type:* *string

---

##### `UseServiceNowAction`<sup>Required</sup> <a name="UseServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction"></a>

```go
func UseServiceNowAction() *string
```

- *Type:* *string

---

##### `UseSharePointAction`<sup>Required</sup> <a name="UseSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction"></a>

```go
func UseSharePointAction() *string
```

- *Type:* *string

---

##### `UseSlackAction`<sup>Required</sup> <a name="UseSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction"></a>

```go
func UseSlackAction() *string
```

- *Type:* *string

---

##### `UseSmartsheetAction`<sup>Required</sup> <a name="UseSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction"></a>

```go
func UseSmartsheetAction() *string
```

- *Type:* *string

---

##### `UseTextractAction`<sup>Required</sup> <a name="UseTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction"></a>

```go
func UseTextractAction() *string
```

- *Type:* *string

---

##### `UseZendeskAction`<sup>Required</sup> <a name="UseZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction"></a>

```go
func UseZendeskAction() *string
```

- *Type:* *string

---

##### `ViewAccountSpiceCapacity`<sup>Required</sup> <a name="ViewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```go
func ViewAccountSpiceCapacity() *string
```

- *Type:* *string

---

##### `ZendeskAction`<sup>Required</sup> <a name="ZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction"></a>

```go
func ZendeskAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightCustomPermissionsTagsList <a name="QuicksightCustomPermissionsTagsList" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

quicksightcustompermissions.NewQuicksightCustomPermissionsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightCustomPermissionsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get"></a>

```go
func Get(index *f64) QuicksightCustomPermissionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightCustomPermissionsTagsOutputReference <a name="QuicksightCustomPermissionsTagsOutputReference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightcustompermissions"

quicksightcustompermissions.NewQuicksightCustomPermissionsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightCustomPermissionsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



