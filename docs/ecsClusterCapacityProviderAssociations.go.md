# `ecsClusterCapacityProviderAssociations` Submodule <a name="`ecsClusterCapacityProviderAssociations` Submodule" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsClusterCapacityProviderAssociations <a name="EcsClusterCapacityProviderAssociations" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_cluster_capacity_provider_associations awscc_ecs_cluster_capacity_provider_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecsclustercapacityproviderassociations"

ecsclustercapacityproviderassociations.NewEcsClusterCapacityProviderAssociations(scope Construct, id *string, config EcsClusterCapacityProviderAssociationsConfig) EcsClusterCapacityProviderAssociations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig">EcsClusterCapacityProviderAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig">EcsClusterCapacityProviderAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.putDefaultCapacityProviderStrategy">PutDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetCapacityProviders">ResetCapacityProviders</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultCapacityProviderStrategy` <a name="PutDefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.putDefaultCapacityProviderStrategy"></a>

```go
func PutDefaultCapacityProviderStrategy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.putDefaultCapacityProviderStrategy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapacityProviders` <a name="ResetCapacityProviders" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetCapacityProviders"></a>

```go
func ResetCapacityProviders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcsClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecsclustercapacityproviderassociations"

ecsclustercapacityproviderassociations.EcsClusterCapacityProviderAssociations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecsclustercapacityproviderassociations"

ecsclustercapacityproviderassociations.EcsClusterCapacityProviderAssociations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecsclustercapacityproviderassociations"

ecsclustercapacityproviderassociations.EcsClusterCapacityProviderAssociations_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecsclustercapacityproviderassociations"

ecsclustercapacityproviderassociations.EcsClusterCapacityProviderAssociations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EcsClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EcsClusterCapacityProviderAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EcsClusterCapacityProviderAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_cluster_capacity_provider_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EcsClusterCapacityProviderAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProvidersInput">CapacityProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategyInput">DefaultCapacityProviderStrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProviders">CapacityProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultCapacityProviderStrategy`<sup>Required</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategy"></a>

```go
func DefaultCapacityProviderStrategy() EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CapacityProvidersInput`<sup>Optional</sup> <a name="CapacityProvidersInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProvidersInput"></a>

```go
func CapacityProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `DefaultCapacityProviderStrategyInput`<sup>Optional</sup> <a name="DefaultCapacityProviderStrategyInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategyInput"></a>

```go
func DefaultCapacityProviderStrategyInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityProviders`<sup>Required</sup> <a name="CapacityProviders" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProviders"></a>

```go
func CapacityProviders() *[]*string
```

- *Type:* *[]*string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsClusterCapacityProviderAssociationsConfig <a name="EcsClusterCapacityProviderAssociationsConfig" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecsclustercapacityproviderassociations"

&ecsclustercapacityproviderassociations.EcsClusterCapacityProviderAssociationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Cluster: *string,
	DefaultCapacityProviderStrategy: interface{},
	CapacityProviders: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The name of the cluster. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code>interface{}</code> | List of capacity providers to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.capacityProviders">CapacityProviders</a></code> | <code>*[]*string</code> | List of capacity providers to associate with the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The name of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_cluster_capacity_provider_associations#cluster EcsClusterCapacityProviderAssociations#cluster}

---

##### `DefaultCapacityProviderStrategy`<sup>Required</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.defaultCapacityProviderStrategy"></a>

```go
DefaultCapacityProviderStrategy interface{}
```

- *Type:* interface{}

List of capacity providers to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_cluster_capacity_provider_associations#default_capacity_provider_strategy EcsClusterCapacityProviderAssociations#default_capacity_provider_strategy}

---

##### `CapacityProviders`<sup>Optional</sup> <a name="CapacityProviders" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.capacityProviders"></a>

```go
CapacityProviders *[]*string
```

- *Type:* *[]*string

List of capacity providers to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_cluster_capacity_provider_associations#capacity_providers EcsClusterCapacityProviderAssociations#capacity_providers}

---

### EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy <a name="EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecsclustercapacityproviderassociations"

&ecsclustercapacityproviderassociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy {
	CapacityProvider: *string,
	Base: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.base">Base</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_cluster_capacity_provider_associations#base EcsClusterCapacityProviderAssociations#base}. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_cluster_capacity_provider_associations#weight EcsClusterCapacityProviderAssociations#weight}. |

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.capacityProvider"></a>

```go
CapacityProvider *string
```

- *Type:* *string

If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_cluster_capacity_provider_associations#capacity_provider EcsClusterCapacityProviderAssociations#capacity_provider}

---

##### `Base`<sup>Optional</sup> <a name="Base" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.base"></a>

```go
Base *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_cluster_capacity_provider_associations#base EcsClusterCapacityProviderAssociations#base}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecs_cluster_capacity_provider_associations#weight EcsClusterCapacityProviderAssociations#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList <a name="EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecsclustercapacityproviderassociations"

ecsclustercapacityproviderassociations.NewEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get"></a>

```go
func Get(index *f64) EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference <a name="EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecsclustercapacityproviderassociations"

ecsclustercapacityproviderassociations.NewEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetBase">ResetBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase` <a name="ResetBase" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetBase"></a>

```go
func ResetBase()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.baseInput">BaseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput">CapacityProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.baseInput"></a>

```go
func BaseInput() *f64
```

- *Type:* *f64

---

##### `CapacityProviderInput`<sup>Optional</sup> <a name="CapacityProviderInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```go
func CapacityProviderInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```go
func Base() *f64
```

- *Type:* *f64

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```go
func CapacityProvider() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



