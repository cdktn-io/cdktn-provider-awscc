# `macieFindingsFilter` Submodule <a name="`macieFindingsFilter` Submodule" id="@cdktn/provider-awscc.macieFindingsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieFindingsFilter <a name="MacieFindingsFilter" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter awscc_macie_findings_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

maciefindingsfilter.NewMacieFindingsFilter(scope Construct, id *string, config MacieFindingsFilterConfig) MacieFindingsFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig">MacieFindingsFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig">MacieFindingsFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria">PutFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFindingCriteria` <a name="PutFindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria"></a>

```go
func PutFindingCriteria(value MacieFindingsFilterFindingCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetAction"></a>

```go
func ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MacieFindingsFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

maciefindingsfilter.MacieFindingsFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

maciefindingsfilter.MacieFindingsFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

maciefindingsfilter.MacieFindingsFilter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

maciefindingsfilter.MacieFindingsFilter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MacieFindingsFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MacieFindingsFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MacieFindingsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MacieFindingsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteria">FindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference">MacieFindingsFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingsFilterId">FindingsFilterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList">MacieFindingsFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteriaInput">FindingCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.position">Position</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FindingCriteria`<sup>Required</sup> <a name="FindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteria"></a>

```go
func FindingCriteria() MacieFindingsFilterFindingCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference">MacieFindingsFilterFindingCriteriaOutputReference</a>

---

##### `FindingsFilterId`<sup>Required</sup> <a name="FindingsFilterId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingsFilterId"></a>

```go
func FindingsFilterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tags"></a>

```go
func Tags() MacieFindingsFilterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList">MacieFindingsFilterTagsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FindingCriteriaInput`<sup>Optional</sup> <a name="FindingCriteriaInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteriaInput"></a>

```go
func FindingCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MacieFindingsFilterConfig <a name="MacieFindingsFilterConfig" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

&maciefindingsfilter.MacieFindingsFilterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FindingCriteria: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria,
	Name: *string,
	Action: *string,
	Description: *string,
	Position: *f64,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.findingCriteria">FindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | Findings filter criteria. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.name">Name</a></code> | <code>*string</code> | Findings filter name. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.action">Action</a></code> | <code>*string</code> | Findings filter action. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.description">Description</a></code> | <code>*string</code> | Findings filter description. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.position">Position</a></code> | <code>*f64</code> | Findings filter position. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FindingCriteria`<sup>Required</sup> <a name="FindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.findingCriteria"></a>

```go
FindingCriteria MacieFindingsFilterFindingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

Findings filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#finding_criteria MacieFindingsFilter#finding_criteria}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Findings filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#name MacieFindingsFilter#name}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Findings filter action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#action MacieFindingsFilter#action}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Findings filter description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#description MacieFindingsFilter#description}

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Findings filter position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#position MacieFindingsFilter#position}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#tags MacieFindingsFilter#tags}

---

### MacieFindingsFilterFindingCriteria <a name="MacieFindingsFilterFindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

&maciefindingsfilter.MacieFindingsFilterFindingCriteria {
	Criterion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.property.criterion">Criterion</a></code> | <code>interface{}</code> | Map of filter criteria. |

---

##### `Criterion`<sup>Optional</sup> <a name="Criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.property.criterion"></a>

```go
Criterion interface{}
```

- *Type:* interface{}

Map of filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#criterion MacieFindingsFilter#criterion}

---

### MacieFindingsFilterFindingCriteriaCriterion <a name="MacieFindingsFilterFindingCriteriaCriterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

&maciefindingsfilter.MacieFindingsFilterFindingCriteriaCriterion {
	Eq: *[]*string,
	Gt: *f64,
	Gte: *f64,
	Lt: *f64,
	Lte: *f64,
	Neq: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.eq">Eq</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#eq MacieFindingsFilter#eq}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gt">Gt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#gt MacieFindingsFilter#gt}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gte">Gte</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#gte MacieFindingsFilter#gte}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lt">Lt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#lt MacieFindingsFilter#lt}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lte">Lte</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#lte MacieFindingsFilter#lte}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.neq">Neq</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#neq MacieFindingsFilter#neq}. |

---

##### `Eq`<sup>Optional</sup> <a name="Eq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.eq"></a>

```go
Eq *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#eq MacieFindingsFilter#eq}.

---

##### `Gt`<sup>Optional</sup> <a name="Gt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gt"></a>

```go
Gt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#gt MacieFindingsFilter#gt}.

---

##### `Gte`<sup>Optional</sup> <a name="Gte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gte"></a>

```go
Gte *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#gte MacieFindingsFilter#gte}.

---

##### `Lt`<sup>Optional</sup> <a name="Lt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lt"></a>

```go
Lt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#lt MacieFindingsFilter#lt}.

---

##### `Lte`<sup>Optional</sup> <a name="Lte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lte"></a>

```go
Lte *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#lte MacieFindingsFilter#lte}.

---

##### `Neq`<sup>Optional</sup> <a name="Neq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.neq"></a>

```go
Neq *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#neq MacieFindingsFilter#neq}.

---

### MacieFindingsFilterTags <a name="MacieFindingsFilterTags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

&maciefindingsfilter.MacieFindingsFilterTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.key">Key</a></code> | <code>*string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.value">Value</a></code> | <code>*string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#key MacieFindingsFilter#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#value MacieFindingsFilter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MacieFindingsFilterFindingCriteriaCriterionMap <a name="MacieFindingsFilterFindingCriteriaCriterionMap" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

maciefindingsfilter.NewMacieFindingsFilterFindingCriteriaCriterionMap(terraformResource IInterpolatingParent, terraformAttribute *string) MacieFindingsFilterFindingCriteriaCriterionMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get"></a>

```go
func Get(key *string) MacieFindingsFilterFindingCriteriaCriterionOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MacieFindingsFilterFindingCriteriaCriterionOutputReference <a name="MacieFindingsFilterFindingCriteriaCriterionOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

maciefindingsfilter.NewMacieFindingsFilterFindingCriteriaCriterionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) MacieFindingsFilterFindingCriteriaCriterionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetEq">ResetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGt">ResetGt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGte">ResetGte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLt">ResetLt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLte">ResetLte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetNeq">ResetNeq</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEq` <a name="ResetEq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetEq"></a>

```go
func ResetEq()
```

##### `ResetGt` <a name="ResetGt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGt"></a>

```go
func ResetGt()
```

##### `ResetGte` <a name="ResetGte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGte"></a>

```go
func ResetGte()
```

##### `ResetLt` <a name="ResetLt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLt"></a>

```go
func ResetLt()
```

##### `ResetLte` <a name="ResetLte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLte"></a>

```go
func ResetLte()
```

##### `ResetNeq` <a name="ResetNeq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetNeq"></a>

```go
func ResetNeq()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput">EqInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput">GteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput">GtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput">LteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput">LtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput">NeqInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eq">Eq</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gt">Gt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gte">Gte</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lt">Lt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lte">Lte</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neq">Neq</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EqInput`<sup>Optional</sup> <a name="EqInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput"></a>

```go
func EqInput() *[]*string
```

- *Type:* *[]*string

---

##### `GteInput`<sup>Optional</sup> <a name="GteInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput"></a>

```go
func GteInput() *f64
```

- *Type:* *f64

---

##### `GtInput`<sup>Optional</sup> <a name="GtInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput"></a>

```go
func GtInput() *f64
```

- *Type:* *f64

---

##### `LteInput`<sup>Optional</sup> <a name="LteInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput"></a>

```go
func LteInput() *f64
```

- *Type:* *f64

---

##### `LtInput`<sup>Optional</sup> <a name="LtInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput"></a>

```go
func LtInput() *f64
```

- *Type:* *f64

---

##### `NeqInput`<sup>Optional</sup> <a name="NeqInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput"></a>

```go
func NeqInput() *[]*string
```

- *Type:* *[]*string

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```go
func Eq() *[]*string
```

- *Type:* *[]*string

---

##### `Gt`<sup>Required</sup> <a name="Gt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```go
func Gt() *f64
```

- *Type:* *f64

---

##### `Gte`<sup>Required</sup> <a name="Gte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```go
func Gte() *f64
```

- *Type:* *f64

---

##### `Lt`<sup>Required</sup> <a name="Lt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```go
func Lt() *f64
```

- *Type:* *f64

---

##### `Lte`<sup>Required</sup> <a name="Lte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```go
func Lte() *f64
```

- *Type:* *f64

---

##### `Neq`<sup>Required</sup> <a name="Neq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```go
func Neq() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MacieFindingsFilterFindingCriteriaOutputReference <a name="MacieFindingsFilterFindingCriteriaOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

maciefindingsfilter.NewMacieFindingsFilterFindingCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MacieFindingsFilterFindingCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion">PutCriterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resetCriterion">ResetCriterion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriterion` <a name="PutCriterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion"></a>

```go
func PutCriterion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCriterion` <a name="ResetCriterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resetCriterion"></a>

```go
func ResetCriterion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterion">Criterion</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap">MacieFindingsFilterFindingCriteriaCriterionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterionInput">CriterionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criterion`<sup>Required</sup> <a name="Criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterion"></a>

```go
func Criterion() MacieFindingsFilterFindingCriteriaCriterionMap
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap">MacieFindingsFilterFindingCriteriaCriterionMap</a>

---

##### `CriterionInput`<sup>Optional</sup> <a name="CriterionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```go
func CriterionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MacieFindingsFilterTagsList <a name="MacieFindingsFilterTagsList" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

maciefindingsfilter.NewMacieFindingsFilterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MacieFindingsFilterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get"></a>

```go
func Get(index *f64) MacieFindingsFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MacieFindingsFilterTagsOutputReference <a name="MacieFindingsFilterTagsOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/maciefindingsfilter"

maciefindingsfilter.NewMacieFindingsFilterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MacieFindingsFilterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



