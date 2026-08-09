# `ssmincidentsReplicationSet` Submodule <a name="`ssmincidentsReplicationSet` Submodule" id="@cdktn/provider-awscc.ssmincidentsReplicationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsReplicationSet <a name="SsmincidentsReplicationSet" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set awscc_ssmincidents_replication_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

ssmincidentsreplicationset.NewSsmincidentsReplicationSet(scope Construct, id *string, config SsmincidentsReplicationSetConfig) SsmincidentsReplicationSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig">SsmincidentsReplicationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig">SsmincidentsReplicationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegions">PutRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetDeletionProtected">ResetDeletionProtected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRegions` <a name="PutRegions" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegions"></a>

```go
func PutRegions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletionProtected` <a name="ResetDeletionProtected" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetDeletionProtected"></a>

```go
func ResetDeletionProtected()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

ssmincidentsreplicationset.SsmincidentsReplicationSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

ssmincidentsreplicationset.SsmincidentsReplicationSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

ssmincidentsreplicationset.SsmincidentsReplicationSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

ssmincidentsreplicationset.SsmincidentsReplicationSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmincidentsReplicationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmincidentsReplicationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmincidentsReplicationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regions">Regions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList">SsmincidentsReplicationSetRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList">SsmincidentsReplicationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtectedInput">DeletionProtectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regionsInput">RegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtected">DeletionProtected</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regions"></a>

```go
func Regions() SsmincidentsReplicationSetRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList">SsmincidentsReplicationSetRegionsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tags"></a>

```go
func Tags() SsmincidentsReplicationSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList">SsmincidentsReplicationSetTagsList</a>

---

##### `DeletionProtectedInput`<sup>Optional</sup> <a name="DeletionProtectedInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtectedInput"></a>

```go
func DeletionProtectedInput() interface{}
```

- *Type:* interface{}

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regionsInput"></a>

```go
func RegionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtected`<sup>Required</sup> <a name="DeletionProtected" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtected"></a>

```go
func DeletionProtected() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsReplicationSetConfig <a name="SsmincidentsReplicationSetConfig" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

&ssmincidentsreplicationset.SsmincidentsReplicationSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Regions: interface{},
	DeletionProtected: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.regions">Regions</a></code> | <code>interface{}</code> | The ReplicationSet configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.deletionProtected">DeletionProtected</a></code> | <code>interface{}</code> | Configures the ReplicationSet deletion protection. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to apply to the replication set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.regions"></a>

```go
Regions interface{}
```

- *Type:* interface{}

The ReplicationSet configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#regions SsmincidentsReplicationSet#regions}

---

##### `DeletionProtected`<sup>Optional</sup> <a name="DeletionProtected" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.deletionProtected"></a>

```go
DeletionProtected interface{}
```

- *Type:* interface{}

Configures the ReplicationSet deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#deletion_protected SsmincidentsReplicationSet#deletion_protected}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to apply to the replication set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#tags SsmincidentsReplicationSet#tags}

---

### SsmincidentsReplicationSetRegions <a name="SsmincidentsReplicationSetRegions" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

&ssmincidentsreplicationset.SsmincidentsReplicationSetRegions {
	RegionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration,
	RegionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.regionConfiguration">RegionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration">SsmincidentsReplicationSetRegionsRegionConfiguration</a></code> | The ReplicationSet regional configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.regionName">RegionName</a></code> | <code>*string</code> | The AWS region name. |

---

##### `RegionConfiguration`<sup>Optional</sup> <a name="RegionConfiguration" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.regionConfiguration"></a>

```go
RegionConfiguration SsmincidentsReplicationSetRegionsRegionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration">SsmincidentsReplicationSetRegionsRegionConfiguration</a>

The ReplicationSet regional configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#region_configuration SsmincidentsReplicationSet#region_configuration}

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

The AWS region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#region_name SsmincidentsReplicationSet#region_name}

---

### SsmincidentsReplicationSetRegionsRegionConfiguration <a name="SsmincidentsReplicationSetRegionsRegionConfiguration" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

&ssmincidentsreplicationset.SsmincidentsReplicationSetRegionsRegionConfiguration {
	SseKmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration.property.sseKmsKeyId">SseKmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service key ID or Key Alias to use to encrypt your replication set. |

---

##### `SseKmsKeyId`<sup>Optional</sup> <a name="SseKmsKeyId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration.property.sseKmsKeyId"></a>

```go
SseKmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service key ID or Key Alias to use to encrypt your replication set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#sse_kms_key_id SsmincidentsReplicationSet#sse_kms_key_id}

---

### SsmincidentsReplicationSetTags <a name="SsmincidentsReplicationSetTags" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

&ssmincidentsreplicationset.SsmincidentsReplicationSetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#key SsmincidentsReplicationSet#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#value SsmincidentsReplicationSet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#key SsmincidentsReplicationSet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmincidents_replication_set#value SsmincidentsReplicationSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsReplicationSetRegionsList <a name="SsmincidentsReplicationSetRegionsList" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

ssmincidentsreplicationset.NewSsmincidentsReplicationSetRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsReplicationSetRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.get"></a>

```go
func Get(index *f64) SsmincidentsReplicationSetRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsReplicationSetRegionsOutputReference <a name="SsmincidentsReplicationSetRegionsOutputReference" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

ssmincidentsreplicationset.NewSsmincidentsReplicationSetRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsReplicationSetRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.putRegionConfiguration">PutRegionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resetRegionConfiguration">ResetRegionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resetRegionName">ResetRegionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRegionConfiguration` <a name="PutRegionConfiguration" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.putRegionConfiguration"></a>

```go
func PutRegionConfiguration(value SsmincidentsReplicationSetRegionsRegionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.putRegionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration">SsmincidentsReplicationSetRegionsRegionConfiguration</a>

---

##### `ResetRegionConfiguration` <a name="ResetRegionConfiguration" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resetRegionConfiguration"></a>

```go
func ResetRegionConfiguration()
```

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resetRegionName"></a>

```go
func ResetRegionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionConfiguration">RegionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference">SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionConfigurationInput">RegionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionConfiguration`<sup>Required</sup> <a name="RegionConfiguration" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionConfiguration"></a>

```go
func RegionConfiguration() SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference">SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference</a>

---

##### `RegionConfigurationInput`<sup>Optional</sup> <a name="RegionConfigurationInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionConfigurationInput"></a>

```go
func RegionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference <a name="SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

ssmincidentsreplicationset.NewSsmincidentsReplicationSetRegionsRegionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resetSseKmsKeyId">ResetSseKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSseKmsKeyId` <a name="ResetSseKmsKeyId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resetSseKmsKeyId"></a>

```go
func ResetSseKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyIdInput">SseKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyId">SseKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SseKmsKeyIdInput`<sup>Optional</sup> <a name="SseKmsKeyIdInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyIdInput"></a>

```go
func SseKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SseKmsKeyId`<sup>Required</sup> <a name="SseKmsKeyId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyId"></a>

```go
func SseKmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsReplicationSetTagsList <a name="SsmincidentsReplicationSetTagsList" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

ssmincidentsreplicationset.NewSsmincidentsReplicationSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsReplicationSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.get"></a>

```go
func Get(index *f64) SsmincidentsReplicationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsReplicationSetTagsOutputReference <a name="SsmincidentsReplicationSetTagsOutputReference" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsreplicationset"

ssmincidentsreplicationset.NewSsmincidentsReplicationSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsReplicationSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



