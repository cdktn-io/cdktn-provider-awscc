# `datasyncLocationFsxOntap` Submodule <a name="`datasyncLocationFsxOntap` Submodule" id="@cdktn/provider-awscc.datasyncLocationFsxOntap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxOntap <a name="DatasyncLocationFsxOntap" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap awscc_datasync_location_fsx_ontap}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntap(scope Construct, id *string, config DatasyncLocationFsxOntapConfig) DatasyncLocationFsxOntap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig">DatasyncLocationFsxOntapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig">DatasyncLocationFsxOntapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putProtocol">PutProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProtocol` <a name="PutProtocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putProtocol"></a>

```go
func PutProtocol(value DatasyncLocationFsxOntapProtocol)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putProtocol.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetSubdirectory"></a>

```go
func ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.DatasyncLocationFsxOntap_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.DatasyncLocationFsxOntap_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.DatasyncLocationFsxOntap_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.DatasyncLocationFsxOntap_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatasyncLocationFsxOntap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatasyncLocationFsxOntap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationFsxOntap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationArn">LocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationUri">LocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocol">Protocol</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference">DatasyncLocationFsxOntapProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList">DatasyncLocationFsxOntapTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocolInput">ProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArnsInput">SecurityGroupArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArnInput">StorageVirtualMachineArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArn">StorageVirtualMachineArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fsxFilesystemArn"></a>

```go
func FsxFilesystemArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationArn"></a>

```go
func LocationArn() *string
```

- *Type:* *string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationUri"></a>

```go
func LocationUri() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocol"></a>

```go
func Protocol() DatasyncLocationFsxOntapProtocolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference">DatasyncLocationFsxOntapProtocolOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tags"></a>

```go
func Tags() DatasyncLocationFsxOntapTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList">DatasyncLocationFsxOntapTagsList</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocolInput"></a>

```go
func ProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupArnsInput`<sup>Optional</sup> <a name="SecurityGroupArnsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArnsInput"></a>

```go
func SecurityGroupArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageVirtualMachineArnInput`<sup>Optional</sup> <a name="StorageVirtualMachineArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArnInput"></a>

```go
func StorageVirtualMachineArnInput() *string
```

- *Type:* *string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectoryInput"></a>

```go
func SubdirectoryInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArns"></a>

```go
func SecurityGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `StorageVirtualMachineArn`<sup>Required</sup> <a name="StorageVirtualMachineArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArn"></a>

```go
func StorageVirtualMachineArn() *string
```

- *Type:* *string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectory"></a>

```go
func Subdirectory() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxOntapConfig <a name="DatasyncLocationFsxOntapConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

&datasynclocationfsxontap.DatasyncLocationFsxOntapConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SecurityGroupArns: *[]*string,
	StorageVirtualMachineArn: *string,
	Protocol: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol,
	Subdirectory: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | The ARNs of the security groups that are to use to configure the FSx ONTAP file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.storageVirtualMachineArn">StorageVirtualMachineArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the FSx ONTAP SVM. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.protocol">Protocol</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a></code> | Configuration settings for NFS or SMB protocol. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | A subdirectory in the location's path. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.securityGroupArns"></a>

```go
SecurityGroupArns *[]*string
```

- *Type:* *[]*string

The ARNs of the security groups that are to use to configure the FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#security_group_arns DatasyncLocationFsxOntap#security_group_arns}

---

##### `StorageVirtualMachineArn`<sup>Required</sup> <a name="StorageVirtualMachineArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.storageVirtualMachineArn"></a>

```go
StorageVirtualMachineArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the FSx ONTAP SVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#storage_virtual_machine_arn DatasyncLocationFsxOntap#storage_virtual_machine_arn}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.protocol"></a>

```go
Protocol DatasyncLocationFsxOntapProtocol
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a>

Configuration settings for NFS or SMB protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#protocol DatasyncLocationFsxOntap#protocol}

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.subdirectory"></a>

```go
Subdirectory *string
```

- *Type:* *string

A subdirectory in the location's path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#subdirectory DatasyncLocationFsxOntap#subdirectory}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#tags DatasyncLocationFsxOntap#tags}

---

### DatasyncLocationFsxOntapProtocol <a name="DatasyncLocationFsxOntapProtocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

&datasynclocationfsxontap.DatasyncLocationFsxOntapProtocol {
	Nfs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs,
	Smb: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.nfs">Nfs</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a></code> | NFS protocol configuration for FSx ONTAP file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.smb">Smb</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a></code> | SMB protocol configuration for FSx ONTAP file system. |

---

##### `Nfs`<sup>Optional</sup> <a name="Nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.nfs"></a>

```go
Nfs DatasyncLocationFsxOntapProtocolNfs
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a>

NFS protocol configuration for FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#nfs DatasyncLocationFsxOntap#nfs}

---

##### `Smb`<sup>Optional</sup> <a name="Smb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.smb"></a>

```go
Smb DatasyncLocationFsxOntapProtocolSmb
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a>

SMB protocol configuration for FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#smb DatasyncLocationFsxOntap#smb}

---

### DatasyncLocationFsxOntapProtocolNfs <a name="DatasyncLocationFsxOntapProtocolNfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

&datasynclocationfsxontap.DatasyncLocationFsxOntapProtocolNfs {
	MountOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a></code> | The NFS mount options that DataSync can use to mount your NFS share. |

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs.property.mountOptions"></a>

```go
MountOptions DatasyncLocationFsxOntapProtocolNfsMountOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a>

The NFS mount options that DataSync can use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#mount_options DatasyncLocationFsxOntap#mount_options}

---

### DatasyncLocationFsxOntapProtocolNfsMountOptions <a name="DatasyncLocationFsxOntapProtocolNfsMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

&datasynclocationfsxontap.DatasyncLocationFsxOntapProtocolNfsMountOptions {
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions.property.version">Version</a></code> | <code>*string</code> | The specific NFS version that you want DataSync to use to mount your NFS share. |

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions.property.version"></a>

```go
Version *string
```

- *Type:* *string

The specific NFS version that you want DataSync to use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#version DatasyncLocationFsxOntap#version}

---

### DatasyncLocationFsxOntapProtocolSmb <a name="DatasyncLocationFsxOntapProtocolSmb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

&datasynclocationfsxontap.DatasyncLocationFsxOntapProtocolSmb {
	CmkSecretConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig,
	CustomSecretConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig,
	Domain: *string,
	MountOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions,
	Password: *string,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.cmkSecretConfig">CmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.customSecretConfig">CustomSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.domain">Domain</a></code> | <code>*string</code> | The name of the Windows domain that the SMB server belongs to. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a></code> | The mount options used by DataSync to access the SMB server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.password">Password</a></code> | <code>*string</code> | The password of the user who can mount the share and has the permissions to access files and folders in the SMB share. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.user">User</a></code> | <code>*string</code> | The user who can mount the share, has the permissions to access files and folders in the SMB share. |

---

##### `CmkSecretConfig`<sup>Optional</sup> <a name="CmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.cmkSecretConfig"></a>

```go
CmkSecretConfig DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#cmk_secret_config DatasyncLocationFsxOntap#cmk_secret_config}

---

##### `CustomSecretConfig`<sup>Optional</sup> <a name="CustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.customSecretConfig"></a>

```go
CustomSecretConfig DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#custom_secret_config DatasyncLocationFsxOntap#custom_secret_config}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The name of the Windows domain that the SMB server belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#domain DatasyncLocationFsxOntap#domain}

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.mountOptions"></a>

```go
MountOptions DatasyncLocationFsxOntapProtocolSmbMountOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a>

The mount options used by DataSync to access the SMB server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#mount_options DatasyncLocationFsxOntap#mount_options}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#password DatasyncLocationFsxOntap#password}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.user"></a>

```go
User *string
```

- *Type:* *string

The user who can mount the share, has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#user DatasyncLocationFsxOntap#user}

---

### DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig <a name="DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

&datasynclocationfsxontap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig {
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#kms_key_arn DatasyncLocationFsxOntap#kms_key_arn}

---

### DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig <a name="DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

&datasynclocationfsxontap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig {
	SecretAccessRoleArn: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretAccessRoleArn">SecretAccessRoleArn</a></code> | <code>*string</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretArn">SecretArn</a></code> | <code>*string</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `SecretAccessRoleArn`<sup>Optional</sup> <a name="SecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretAccessRoleArn"></a>

```go
SecretAccessRoleArn *string
```

- *Type:* *string

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#secret_access_role_arn DatasyncLocationFsxOntap#secret_access_role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#secret_arn DatasyncLocationFsxOntap#secret_arn}

---

### DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig <a name="DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

&datasynclocationfsxontap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig {

}
```


### DatasyncLocationFsxOntapProtocolSmbMountOptions <a name="DatasyncLocationFsxOntapProtocolSmbMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

&datasynclocationfsxontap.DatasyncLocationFsxOntapProtocolSmbMountOptions {
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions.property.version">Version</a></code> | <code>*string</code> | The specific SMB version that you want DataSync to use to mount your SMB share. |

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions.property.version"></a>

```go
Version *string
```

- *Type:* *string

The specific SMB version that you want DataSync to use to mount your SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#version DatasyncLocationFsxOntap#version}

---

### DatasyncLocationFsxOntapTags <a name="DatasyncLocationFsxOntapTags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

&datasynclocationfsxontap.DatasyncLocationFsxOntapTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.key">Key</a></code> | <code>*string</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.value">Value</a></code> | <code>*string</code> | The value for an AWS resource tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#key DatasyncLocationFsxOntap#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#value DatasyncLocationFsxOntap#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference <a name="DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOntapProtocolNfsOutputReference <a name="DatasyncLocationFsxOntapProtocolNfsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntapProtocolNfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOntapProtocolNfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.putMountOptions">PutMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMountOptions` <a name="PutMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.putMountOptions"></a>

```go
func PutMountOptions(value DatasyncLocationFsxOntapProtocolNfsMountOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a>

---

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resetMountOptions"></a>

```go
func ResetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptions"></a>

```go
func MountOptions() DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference</a>

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptionsInput"></a>

```go
func MountOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOntapProtocolOutputReference <a name="DatasyncLocationFsxOntapProtocolOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntapProtocolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOntapProtocolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putNfs">PutNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb">PutSmb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetNfs">ResetNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetSmb">ResetSmb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNfs` <a name="PutNfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putNfs"></a>

```go
func PutNfs(value DatasyncLocationFsxOntapProtocolNfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a>

---

##### `PutSmb` <a name="PutSmb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb"></a>

```go
func PutSmb(value DatasyncLocationFsxOntapProtocolSmb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a>

---

##### `ResetNfs` <a name="ResetNfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetNfs"></a>

```go
func ResetNfs()
```

##### `ResetSmb` <a name="ResetSmb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetSmb"></a>

```go
func ResetSmb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference">DatasyncLocationFsxOntapProtocolNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smb">Smb</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference">DatasyncLocationFsxOntapProtocolSmbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfsInput">NfsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smbInput">SmbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfs"></a>

```go
func Nfs() DatasyncLocationFsxOntapProtocolNfsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference">DatasyncLocationFsxOntapProtocolNfsOutputReference</a>

---

##### `Smb`<sup>Required</sup> <a name="Smb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smb"></a>

```go
func Smb() DatasyncLocationFsxOntapProtocolSmbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference">DatasyncLocationFsxOntapProtocolSmbOutputReference</a>

---

##### `NfsInput`<sup>Optional</sup> <a name="NfsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfsInput"></a>

```go
func NfsInput() interface{}
```

- *Type:* interface{}

---

##### `SmbInput`<sup>Optional</sup> <a name="SmbInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smbInput"></a>

```go
func SmbInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretAccessRoleArn">ResetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretAccessRoleArn` <a name="ResetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```go
func ResetSecretAccessRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">SecretAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn">SecretAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretAccessRoleArnInput`<sup>Optional</sup> <a name="SecretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```go
func SecretAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `SecretAccessRoleArn`<sup>Required</sup> <a name="SecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```go
func SecretAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig</a>

---


### DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOntapProtocolSmbOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntapProtocolSmbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOntapProtocolSmbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCmkSecretConfig">PutCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCustomSecretConfig">PutCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putMountOptions">PutMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCmkSecretConfig">ResetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCustomSecretConfig">ResetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCmkSecretConfig` <a name="PutCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCmkSecretConfig"></a>

```go
func PutCmkSecretConfig(value DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

---

##### `PutCustomSecretConfig` <a name="PutCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCustomSecretConfig"></a>

```go
func PutCustomSecretConfig(value DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

---

##### `PutMountOptions` <a name="PutMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putMountOptions"></a>

```go
func PutMountOptions(value DatasyncLocationFsxOntapProtocolSmbMountOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a>

---

##### `ResetCmkSecretConfig` <a name="ResetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCmkSecretConfig"></a>

```go
func ResetCmkSecretConfig()
```

##### `ResetCustomSecretConfig` <a name="ResetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCustomSecretConfig"></a>

```go
func ResetCustomSecretConfig()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfig">CmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfig">CustomSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.managedSecretConfig">ManagedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfigInput">CmkSecretConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfigInput">CustomSecretConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CmkSecretConfig`<sup>Required</sup> <a name="CmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfig"></a>

```go
func CmkSecretConfig() DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference</a>

---

##### `CustomSecretConfig`<sup>Required</sup> <a name="CustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfig"></a>

```go
func CustomSecretConfig() DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference</a>

---

##### `ManagedSecretConfig`<sup>Required</sup> <a name="ManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.managedSecretConfig"></a>

```go
func ManagedSecretConfig() DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference</a>

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptions"></a>

```go
func MountOptions() DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference</a>

---

##### `CmkSecretConfigInput`<sup>Optional</sup> <a name="CmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfigInput"></a>

```go
func CmkSecretConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CustomSecretConfigInput`<sup>Optional</sup> <a name="CustomSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfigInput"></a>

```go
func CustomSecretConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptionsInput"></a>

```go
func MountOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOntapTagsList <a name="DatasyncLocationFsxOntapTagsList" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntapTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatasyncLocationFsxOntapTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.get"></a>

```go
func Get(index *f64) DatasyncLocationFsxOntapTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOntapTagsOutputReference <a name="DatasyncLocationFsxOntapTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxontap"

datasynclocationfsxontap.NewDatasyncLocationFsxOntapTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatasyncLocationFsxOntapTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



