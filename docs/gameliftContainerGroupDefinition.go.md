# `gameliftContainerGroupDefinition` Submodule <a name="`gameliftContainerGroupDefinition` Submodule" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftContainerGroupDefinition <a name="GameliftContainerGroupDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition awscc_gamelift_container_group_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinition(scope Construct, id *string, config GameliftContainerGroupDefinitionConfig) GameliftContainerGroupDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig">GameliftContainerGroupDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig">GameliftContainerGroupDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition">PutGameServerContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions">PutSupportContainerDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetContainerGroupType">ResetContainerGroupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetGameServerContainerDefinition">ResetGameServerContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSourceVersionNumber">ResetSourceVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSupportContainerDefinitions">ResetSupportContainerDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetVersionDescription">ResetVersionDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGameServerContainerDefinition` <a name="PutGameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition"></a>

```go
func PutGameServerContainerDefinition(value GameliftContainerGroupDefinitionGameServerContainerDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---

##### `PutSupportContainerDefinitions` <a name="PutSupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions"></a>

```go
func PutSupportContainerDefinitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContainerGroupType` <a name="ResetContainerGroupType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetContainerGroupType"></a>

```go
func ResetContainerGroupType()
```

##### `ResetGameServerContainerDefinition` <a name="ResetGameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetGameServerContainerDefinition"></a>

```go
func ResetGameServerContainerDefinition()
```

##### `ResetSourceVersionNumber` <a name="ResetSourceVersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSourceVersionNumber"></a>

```go
func ResetSourceVersionNumber()
```

##### `ResetSupportContainerDefinitions` <a name="ResetSupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSupportContainerDefinitions"></a>

```go
func ResetSupportContainerDefinitions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVersionDescription` <a name="ResetVersionDescription" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetVersionDescription"></a>

```go
func ResetVersionDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.GameliftContainerGroupDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.GameliftContainerGroupDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.GameliftContainerGroupDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.GameliftContainerGroupDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GameliftContainerGroupDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GameliftContainerGroupDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GameliftContainerGroupDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupDefinitionArn">ContainerGroupDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinition">GameServerContainerDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitions">SupportContainerDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList">GameliftContainerGroupDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionNumber">VersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupTypeInput">ContainerGroupTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinitionInput">GameServerContainerDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumberInput">SourceVersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitionsInput">SupportContainerDefinitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytesInput">TotalMemoryLimitMebibytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimitInput">TotalVcpuLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescriptionInput">VersionDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupType">ContainerGroupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumber">SourceVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes">TotalMemoryLimitMebibytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimit">TotalVcpuLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerGroupDefinitionArn`<sup>Required</sup> <a name="ContainerGroupDefinitionArn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupDefinitionArn"></a>

```go
func ContainerGroupDefinitionArn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `GameServerContainerDefinition`<sup>Required</sup> <a name="GameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinition"></a>

```go
func GameServerContainerDefinition() GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `SupportContainerDefinitions`<sup>Required</sup> <a name="SupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitions"></a>

```go
func SupportContainerDefinitions() GameliftContainerGroupDefinitionSupportContainerDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tags"></a>

```go
func Tags() GameliftContainerGroupDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList">GameliftContainerGroupDefinitionTagsList</a>

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionNumber"></a>

```go
func VersionNumber() *f64
```

- *Type:* *f64

---

##### `ContainerGroupTypeInput`<sup>Optional</sup> <a name="ContainerGroupTypeInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupTypeInput"></a>

```go
func ContainerGroupTypeInput() *string
```

- *Type:* *string

---

##### `GameServerContainerDefinitionInput`<sup>Optional</sup> <a name="GameServerContainerDefinitionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinitionInput"></a>

```go
func GameServerContainerDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystemInput"></a>

```go
func OperatingSystemInput() *string
```

- *Type:* *string

---

##### `SourceVersionNumberInput`<sup>Optional</sup> <a name="SourceVersionNumberInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumberInput"></a>

```go
func SourceVersionNumberInput() *f64
```

- *Type:* *f64

---

##### `SupportContainerDefinitionsInput`<sup>Optional</sup> <a name="SupportContainerDefinitionsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitionsInput"></a>

```go
func SupportContainerDefinitionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TotalMemoryLimitMebibytesInput`<sup>Optional</sup> <a name="TotalMemoryLimitMebibytesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytesInput"></a>

```go
func TotalMemoryLimitMebibytesInput() *f64
```

- *Type:* *f64

---

##### `TotalVcpuLimitInput`<sup>Optional</sup> <a name="TotalVcpuLimitInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimitInput"></a>

```go
func TotalVcpuLimitInput() *f64
```

- *Type:* *f64

---

##### `VersionDescriptionInput`<sup>Optional</sup> <a name="VersionDescriptionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescriptionInput"></a>

```go
func VersionDescriptionInput() *string
```

- *Type:* *string

---

##### `ContainerGroupType`<sup>Required</sup> <a name="ContainerGroupType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupType"></a>

```go
func ContainerGroupType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `SourceVersionNumber`<sup>Required</sup> <a name="SourceVersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumber"></a>

```go
func SourceVersionNumber() *f64
```

- *Type:* *f64

---

##### `TotalMemoryLimitMebibytes`<sup>Required</sup> <a name="TotalMemoryLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes"></a>

```go
func TotalMemoryLimitMebibytes() *f64
```

- *Type:* *f64

---

##### `TotalVcpuLimit`<sup>Required</sup> <a name="TotalVcpuLimit" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimit"></a>

```go
func TotalVcpuLimit() *f64
```

- *Type:* *f64

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescription"></a>

```go
func VersionDescription() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftContainerGroupDefinitionConfig <a name="GameliftContainerGroupDefinitionConfig" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OperatingSystem: *string,
	TotalMemoryLimitMebibytes: *f64,
	TotalVcpuLimit: *f64,
	ContainerGroupType: *string,
	GameServerContainerDefinition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition,
	SourceVersionNumber: *f64,
	SupportContainerDefinitions: interface{},
	Tags: interface{},
	VersionDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | A descriptive label for the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | The operating system of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalMemoryLimitMebibytes">TotalMemoryLimitMebibytes</a></code> | <code>*f64</code> | The total memory limit of container groups following this definition in MiB. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalVcpuLimit">TotalVcpuLimit</a></code> | <code>*f64</code> | The total amount of virtual CPUs on the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.containerGroupType">ContainerGroupType</a></code> | <code>*string</code> | The scope of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.gameServerContainerDefinition">GameServerContainerDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | Specifies the information required to run game servers with this container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.sourceVersionNumber">SourceVersionNumber</a></code> | <code>*f64</code> | A specific ContainerGroupDefinition version to be updated. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.supportContainerDefinitions">SupportContainerDefinitions</a></code> | <code>interface{}</code> | A collection of support container definitions that define the containers in this group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | The description of this version. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A descriptive label for the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.operatingSystem"></a>

```go
OperatingSystem *string
```

- *Type:* *string

The operating system of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#operating_system GameliftContainerGroupDefinition#operating_system}

---

##### `TotalMemoryLimitMebibytes`<sup>Required</sup> <a name="TotalMemoryLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalMemoryLimitMebibytes"></a>

```go
TotalMemoryLimitMebibytes *f64
```

- *Type:* *f64

The total memory limit of container groups following this definition in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#total_memory_limit_mebibytes GameliftContainerGroupDefinition#total_memory_limit_mebibytes}

---

##### `TotalVcpuLimit`<sup>Required</sup> <a name="TotalVcpuLimit" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalVcpuLimit"></a>

```go
TotalVcpuLimit *f64
```

- *Type:* *f64

The total amount of virtual CPUs on the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#total_vcpu_limit GameliftContainerGroupDefinition#total_vcpu_limit}

---

##### `ContainerGroupType`<sup>Optional</sup> <a name="ContainerGroupType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.containerGroupType"></a>

```go
ContainerGroupType *string
```

- *Type:* *string

The scope of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_group_type GameliftContainerGroupDefinition#container_group_type}

---

##### `GameServerContainerDefinition`<sup>Optional</sup> <a name="GameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.gameServerContainerDefinition"></a>

```go
GameServerContainerDefinition GameliftContainerGroupDefinitionGameServerContainerDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

Specifies the information required to run game servers with this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#game_server_container_definition GameliftContainerGroupDefinition#game_server_container_definition}

---

##### `SourceVersionNumber`<sup>Optional</sup> <a name="SourceVersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.sourceVersionNumber"></a>

```go
SourceVersionNumber *f64
```

- *Type:* *f64

A specific ContainerGroupDefinition version to be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#source_version_number GameliftContainerGroupDefinition#source_version_number}

---

##### `SupportContainerDefinitions`<sup>Optional</sup> <a name="SupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.supportContainerDefinitions"></a>

```go
SupportContainerDefinitions interface{}
```

- *Type:* interface{}

A collection of support container definitions that define the containers in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#support_container_definitions GameliftContainerGroupDefinition#support_container_definitions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#tags GameliftContainerGroupDefinition#tags}

---

##### `VersionDescription`<sup>Optional</sup> <a name="VersionDescription" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.versionDescription"></a>

```go
VersionDescription *string
```

- *Type:* *string

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#version_description GameliftContainerGroupDefinition#version_description}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinition <a name="GameliftContainerGroupDefinitionGameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition {
	ContainerName: *string,
	DependsOn: interface{},
	EnvironmentOverride: interface{},
	ImageUri: *string,
	LinuxCapabilities: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities,
	MountPoints: interface{},
	PortConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration,
	ResolvedImageDigest: *string,
	ServerSdkVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.containerName">ContainerName</a></code> | <code>*string</code> | A descriptive label for the container definition. Container definition names must be unique with a container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.dependsOn">DependsOn</a></code> | <code>interface{}</code> | A list of container dependencies that determines when this container starts up and shuts down. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.environmentOverride">EnvironmentOverride</a></code> | <code>interface{}</code> | The environment variables to pass to a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.imageUri">ImageUri</a></code> | <code>*string</code> | Specifies the image URI of this container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.linuxCapabilities">LinuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.mountPoints">MountPoints</a></code> | <code>interface{}</code> | A list of mount point configurations to be used in a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.portConfiguration">PortConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | Defines the ports on the container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.resolvedImageDigest">ResolvedImageDigest</a></code> | <code>*string</code> | The digest of the container image. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.serverSdkVersion">ServerSdkVersion</a></code> | <code>*string</code> | The version of the server SDK used in this container group. |

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

A descriptive label for the container definition. Container definition names must be unique with a container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.dependsOn"></a>

```go
DependsOn interface{}
```

- *Type:* interface{}

A list of container dependencies that determines when this container starts up and shuts down.

For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}

---

##### `EnvironmentOverride`<sup>Optional</sup> <a name="EnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.environmentOverride"></a>

```go
EnvironmentOverride interface{}
```

- *Type:* interface{}

The environment variables to pass to a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

Specifies the image URI of this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}

---

##### `LinuxCapabilities`<sup>Optional</sup> <a name="LinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.linuxCapabilities"></a>

```go
LinuxCapabilities GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}

---

##### `MountPoints`<sup>Optional</sup> <a name="MountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.mountPoints"></a>

```go
MountPoints interface{}
```

- *Type:* interface{}

A list of mount point configurations to be used in a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}

---

##### `PortConfiguration`<sup>Optional</sup> <a name="PortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.portConfiguration"></a>

```go
PortConfiguration GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

Defines the ports on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}

---

##### `ResolvedImageDigest`<sup>Optional</sup> <a name="ResolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.resolvedImageDigest"></a>

```go
ResolvedImageDigest *string
```

- *Type:* *string

The digest of the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}

---

##### `ServerSdkVersion`<sup>Optional</sup> <a name="ServerSdkVersion" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.serverSdkVersion"></a>

```go
ServerSdkVersion *string
```

- *Type:* *string

The version of the server SDK used in this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#server_sdk_version GameliftContainerGroupDefinition#server_sdk_version}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn {
	Condition: *string,
	ContainerName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.condition">Condition</a></code> | <code>*string</code> | The type of dependency. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.containerName">ContainerName</a></code> | <code>*string</code> | A descriptive label for the container definition. The container being defined depends on this container's condition. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

The type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#condition GameliftContainerGroupDefinition#condition}

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

A descriptive label for the container definition. The container being defined depends on this container's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.name">Name</a></code> | <code>*string</code> | The environment variable name. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.value">Value</a></code> | <code>*string</code> | The environment variable value. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.name"></a>

```go
Name *string
```

- *Type:* *string

The environment variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.value"></a>

```go
Value *string
```

- *Type:* *string

The environment variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities {
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.property.include">Include</a></code> | <code>*[]*string</code> | The list of Linux capabilities to add to the container's default configuration. |

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

The list of Linux capabilities to add to the container's default configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints {
	AccessLevel: *string,
	ContainerPath: *string,
	InstancePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | The access permissions for the mounted path. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.containerPath">ContainerPath</a></code> | <code>*string</code> | The path inside the container where the mount is accessible. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.instancePath">InstancePath</a></code> | <code>*string</code> | The path on the host that will be mounted in the container. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

The access permissions for the mounted path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#access_level GameliftContainerGroupDefinition#access_level}

---

##### `ContainerPath`<sup>Optional</sup> <a name="ContainerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.containerPath"></a>

```go
ContainerPath *string
```

- *Type:* *string

The path inside the container where the mount is accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_path GameliftContainerGroupDefinition#container_path}

---

##### `InstancePath`<sup>Optional</sup> <a name="InstancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.instancePath"></a>

```go
InstancePath *string
```

- *Type:* *string

The path on the host that will be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#instance_path GameliftContainerGroupDefinition#instance_path}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration {
	ContainerPortRanges: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.property.containerPortRanges">ContainerPortRanges</a></code> | <code>interface{}</code> | Specifies one or more ranges of ports on a container. |

---

##### `ContainerPortRanges`<sup>Optional</sup> <a name="ContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.property.containerPortRanges"></a>

```go
ContainerPortRanges interface{}
```

- *Type:* interface{}

Specifies one or more ranges of ports on a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges {
	FromPort: *f64,
	Protocol: *string,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.fromPort">FromPort</a></code> | <code>*f64</code> | A starting value for the range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.protocol">Protocol</a></code> | <code>*string</code> | Defines the protocol of these ports. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.toPort">ToPort</a></code> | <code>*f64</code> | An ending value for the range of allowed port numbers. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

A starting value for the range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#from_port GameliftContainerGroupDefinition#from_port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Defines the protocol of these ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#protocol GameliftContainerGroupDefinition#protocol}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

An ending value for the range of allowed port numbers.

Port numbers are end-inclusive. This value must be equal to or greater than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#to_port GameliftContainerGroupDefinition#to_port}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitions <a name="GameliftContainerGroupDefinitionSupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions {
	ContainerName: *string,
	DependsOn: interface{},
	EnvironmentOverride: interface{},
	Essential: interface{},
	HealthCheck: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck,
	ImageUri: *string,
	LinuxCapabilities: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities,
	MemoryHardLimitMebibytes: *f64,
	MountPoints: interface{},
	PortConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration,
	ResolvedImageDigest: *string,
	Vcpu: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.containerName">ContainerName</a></code> | <code>*string</code> | A descriptive label for the container definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.dependsOn">DependsOn</a></code> | <code>interface{}</code> | A list of container dependencies that determines when this container starts up and shuts down. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.environmentOverride">EnvironmentOverride</a></code> | <code>interface{}</code> | The environment variables to pass to a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.essential">Essential</a></code> | <code>interface{}</code> | Specifies if the container is essential. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | Specifies how the health of the containers will be checked. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.imageUri">ImageUri</a></code> | <code>*string</code> | Specifies the image URI of this container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.linuxCapabilities">LinuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.memoryHardLimitMebibytes">MemoryHardLimitMebibytes</a></code> | <code>*f64</code> | The total memory limit of container groups following this definition in MiB. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.mountPoints">MountPoints</a></code> | <code>interface{}</code> | A list of mount point configurations to be used in a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.portConfiguration">PortConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | Defines the ports on the container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.resolvedImageDigest">ResolvedImageDigest</a></code> | <code>*string</code> | The digest of the container image. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.vcpu">Vcpu</a></code> | <code>*f64</code> | The number of virtual CPUs to give to the support group. |

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

A descriptive label for the container definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.dependsOn"></a>

```go
DependsOn interface{}
```

- *Type:* interface{}

A list of container dependencies that determines when this container starts up and shuts down.

For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}

---

##### `EnvironmentOverride`<sup>Optional</sup> <a name="EnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.environmentOverride"></a>

```go
EnvironmentOverride interface{}
```

- *Type:* interface{}

The environment variables to pass to a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.essential"></a>

```go
Essential interface{}
```

- *Type:* interface{}

Specifies if the container is essential.

If an essential container fails a health check, then all containers in the container group will be restarted. You must specify exactly 1 essential container in a container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#essential GameliftContainerGroupDefinition#essential}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.healthCheck"></a>

```go
HealthCheck GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

Specifies how the health of the containers will be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#health_check GameliftContainerGroupDefinition#health_check}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

Specifies the image URI of this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}

---

##### `LinuxCapabilities`<sup>Optional</sup> <a name="LinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.linuxCapabilities"></a>

```go
LinuxCapabilities GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}

---

##### `MemoryHardLimitMebibytes`<sup>Optional</sup> <a name="MemoryHardLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.memoryHardLimitMebibytes"></a>

```go
MemoryHardLimitMebibytes *f64
```

- *Type:* *f64

The total memory limit of container groups following this definition in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#memory_hard_limit_mebibytes GameliftContainerGroupDefinition#memory_hard_limit_mebibytes}

---

##### `MountPoints`<sup>Optional</sup> <a name="MountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.mountPoints"></a>

```go
MountPoints interface{}
```

- *Type:* interface{}

A list of mount point configurations to be used in a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}

---

##### `PortConfiguration`<sup>Optional</sup> <a name="PortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.portConfiguration"></a>

```go
PortConfiguration GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

Defines the ports on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}

---

##### `ResolvedImageDigest`<sup>Optional</sup> <a name="ResolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.resolvedImageDigest"></a>

```go
ResolvedImageDigest *string
```

- *Type:* *string

The digest of the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}

---

##### `Vcpu`<sup>Optional</sup> <a name="Vcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.vcpu"></a>

```go
Vcpu *f64
```

- *Type:* *f64

The number of virtual CPUs to give to the support group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#vcpu GameliftContainerGroupDefinition#vcpu}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn {
	Condition: *string,
	ContainerName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.condition">Condition</a></code> | <code>*string</code> | The type of dependency. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.containerName">ContainerName</a></code> | <code>*string</code> | A descriptive label for the container definition. The container being defined depends on this container's condition. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

The type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#condition GameliftContainerGroupDefinition#condition}

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

A descriptive label for the container definition. The container being defined depends on this container's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.name">Name</a></code> | <code>*string</code> | The environment variable name. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.value">Value</a></code> | <code>*string</code> | The environment variable value. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.name"></a>

```go
Name *string
```

- *Type:* *string

The environment variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.value"></a>

```go
Value *string
```

- *Type:* *string

The environment variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck {
	Command: *[]*string,
	Interval: *f64,
	Retries: *f64,
	StartPeriod: *f64,
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.command">Command</a></code> | <code>*[]*string</code> | A string array representing the command that the container runs to determine if it is healthy. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.interval">Interval</a></code> | <code>*f64</code> | How often (in seconds) the health is checked. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.retries">Retries</a></code> | <code>*f64</code> | How many times the process manager will retry the command after a timeout. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.startPeriod">StartPeriod</a></code> | <code>*f64</code> | The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.timeout">Timeout</a></code> | <code>*f64</code> | How many seconds the process manager allows the command to run before canceling it. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

A string array representing the command that the container runs to determine if it is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#command GameliftContainerGroupDefinition#command}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

How often (in seconds) the health is checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#interval GameliftContainerGroupDefinition#interval}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

How many times the process manager will retry the command after a timeout.

(The first run of the command does not count as a retry.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#retries GameliftContainerGroupDefinition#retries}

---

##### `StartPeriod`<sup>Optional</sup> <a name="StartPeriod" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.startPeriod"></a>

```go
StartPeriod *f64
```

- *Type:* *f64

The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#start_period GameliftContainerGroupDefinition#start_period}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

How many seconds the process manager allows the command to run before canceling it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#timeout GameliftContainerGroupDefinition#timeout}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities {
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.property.include">Include</a></code> | <code>*[]*string</code> | The list of Linux capabilities to add to the container's default configuration. |

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

The list of Linux capabilities to add to the container's default configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints {
	AccessLevel: *string,
	ContainerPath: *string,
	InstancePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | The access permissions for the mounted path. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.containerPath">ContainerPath</a></code> | <code>*string</code> | The path inside the container where the mount is accessible. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.instancePath">InstancePath</a></code> | <code>*string</code> | The path on the host that will be mounted in the container. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

The access permissions for the mounted path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#access_level GameliftContainerGroupDefinition#access_level}

---

##### `ContainerPath`<sup>Optional</sup> <a name="ContainerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.containerPath"></a>

```go
ContainerPath *string
```

- *Type:* *string

The path inside the container where the mount is accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_path GameliftContainerGroupDefinition#container_path}

---

##### `InstancePath`<sup>Optional</sup> <a name="InstancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.instancePath"></a>

```go
InstancePath *string
```

- *Type:* *string

The path on the host that will be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#instance_path GameliftContainerGroupDefinition#instance_path}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration {
	ContainerPortRanges: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.property.containerPortRanges">ContainerPortRanges</a></code> | <code>interface{}</code> | Specifies one or more ranges of ports on a container. |

---

##### `ContainerPortRanges`<sup>Optional</sup> <a name="ContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.property.containerPortRanges"></a>

```go
ContainerPortRanges interface{}
```

- *Type:* interface{}

Specifies one or more ranges of ports on a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges {
	FromPort: *f64,
	Protocol: *string,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.fromPort">FromPort</a></code> | <code>*f64</code> | A starting value for the range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.protocol">Protocol</a></code> | <code>*string</code> | Defines the protocol of these ports. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.toPort">ToPort</a></code> | <code>*f64</code> | An ending value for the range of allowed port numbers. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

A starting value for the range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#from_port GameliftContainerGroupDefinition#from_port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Defines the protocol of these ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#protocol GameliftContainerGroupDefinition#protocol}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

An ending value for the range of allowed port numbers.

Port numbers are end-inclusive. This value must be equal to or greater than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#to_port GameliftContainerGroupDefinition#to_port}

---

### GameliftContainerGroupDefinitionTags <a name="GameliftContainerGroupDefinitionTags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

&gameliftcontainergroupdefinition.GameliftContainerGroupDefinitionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#key GameliftContainerGroupDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get"></a>

```go
func Get(index *f64) GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetContainerName"></a>

```go
func ResetContainerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get"></a>

```go
func Get(index *f64) GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get"></a>

```go
func Get(index *f64) GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetContainerPath">ResetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetInstancePath">ResetInstancePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetContainerPath` <a name="ResetContainerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetContainerPath"></a>

```go
func ResetContainerPath()
```

##### `ResetInstancePath` <a name="ResetInstancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetInstancePath"></a>

```go
func ResetInstancePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPathInput">ContainerPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePathInput">InstancePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath">InstancePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `ContainerPathInput`<sup>Optional</sup> <a name="ContainerPathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPathInput"></a>

```go
func ContainerPathInput() *string
```

- *Type:* *string

---

##### `InstancePathInput`<sup>Optional</sup> <a name="InstancePathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePathInput"></a>

```go
func InstancePathInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `InstancePath`<sup>Required</sup> <a name="InstancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath"></a>

```go
func InstancePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn">PutDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride">PutEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities">PutLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints">PutMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration">PutPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetEnvironmentOverride">ResetEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetLinuxCapabilities">ResetLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetMountPoints">ResetMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetPortConfiguration">ResetPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetResolvedImageDigest">ResetResolvedImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetServerSdkVersion">ResetServerSdkVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDependsOn` <a name="PutDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn"></a>

```go
func PutDependsOn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvironmentOverride` <a name="PutEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride"></a>

```go
func PutEnvironmentOverride(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLinuxCapabilities` <a name="PutLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities"></a>

```go
func PutLinuxCapabilities(value GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---

##### `PutMountPoints` <a name="PutMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints"></a>

```go
func PutMountPoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPortConfiguration` <a name="PutPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration"></a>

```go
func PutPortConfiguration(value GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetContainerName"></a>

```go
func ResetContainerName()
```

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetDependsOn"></a>

```go
func ResetDependsOn()
```

##### `ResetEnvironmentOverride` <a name="ResetEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetEnvironmentOverride"></a>

```go
func ResetEnvironmentOverride()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetImageUri"></a>

```go
func ResetImageUri()
```

##### `ResetLinuxCapabilities` <a name="ResetLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetLinuxCapabilities"></a>

```go
func ResetLinuxCapabilities()
```

##### `ResetMountPoints` <a name="ResetMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetMountPoints"></a>

```go
func ResetMountPoints()
```

##### `ResetPortConfiguration` <a name="ResetPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetPortConfiguration"></a>

```go
func ResetPortConfiguration()
```

##### `ResetResolvedImageDigest` <a name="ResetResolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetResolvedImageDigest"></a>

```go
func ResetResolvedImageDigest()
```

##### `ResetServerSdkVersion` <a name="ResetServerSdkVersion" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetServerSdkVersion"></a>

```go
func ResetServerSdkVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn">DependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride">EnvironmentOverride</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities">LinuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints">MountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration">PortConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverrideInput">EnvironmentOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilitiesInput">LinuxCapabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPointsInput">MountPointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfigurationInput">PortConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigestInput">ResolvedImageDigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersionInput">ServerSdkVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest">ResolvedImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion">ServerSdkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn"></a>

```go
func DependsOn() GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a>

---

##### `EnvironmentOverride`<sup>Required</sup> <a name="EnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride"></a>

```go
func EnvironmentOverride() GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a>

---

##### `LinuxCapabilities`<sup>Required</sup> <a name="LinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities"></a>

```go
func LinuxCapabilities() GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a>

---

##### `MountPoints`<sup>Required</sup> <a name="MountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints"></a>

```go
func MountPoints() GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a>

---

##### `PortConfiguration`<sup>Required</sup> <a name="PortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration"></a>

```go
func PortConfiguration() GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a>

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOnInput"></a>

```go
func DependsOnInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentOverrideInput`<sup>Optional</sup> <a name="EnvironmentOverrideInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverrideInput"></a>

```go
func EnvironmentOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `LinuxCapabilitiesInput`<sup>Optional</sup> <a name="LinuxCapabilitiesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilitiesInput"></a>

```go
func LinuxCapabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `MountPointsInput`<sup>Optional</sup> <a name="MountPointsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPointsInput"></a>

```go
func MountPointsInput() interface{}
```

- *Type:* interface{}

---

##### `PortConfigurationInput`<sup>Optional</sup> <a name="PortConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfigurationInput"></a>

```go
func PortConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ResolvedImageDigestInput`<sup>Optional</sup> <a name="ResolvedImageDigestInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigestInput"></a>

```go
func ResolvedImageDigestInput() *string
```

- *Type:* *string

---

##### `ServerSdkVersionInput`<sup>Optional</sup> <a name="ServerSdkVersionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersionInput"></a>

```go
func ServerSdkVersionInput() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `ResolvedImageDigest`<sup>Required</sup> <a name="ResolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest"></a>

```go
func ResolvedImageDigest() *string
```

- *Type:* *string

---

##### `ServerSdkVersion`<sup>Required</sup> <a name="ServerSdkVersion" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion"></a>

```go
func ServerSdkVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get"></a>

```go
func Get(index *f64) GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges">PutContainerPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resetContainerPortRanges">ResetContainerPortRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerPortRanges` <a name="PutContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges"></a>

```go
func PutContainerPortRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContainerPortRanges` <a name="ResetContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resetContainerPortRanges"></a>

```go
func ResetContainerPortRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges">ContainerPortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRangesInput">ContainerPortRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortRanges`<sup>Required</sup> <a name="ContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges"></a>

```go
func ContainerPortRanges() GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a>

---

##### `ContainerPortRangesInput`<sup>Optional</sup> <a name="ContainerPortRangesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRangesInput"></a>

```go
func ContainerPortRangesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get"></a>

```go
func Get(index *f64) GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetContainerName"></a>

```go
func ResetContainerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get"></a>

```go
func Get(index *f64) GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetStartPeriod">ResetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetStartPeriod` <a name="ResetStartPeriod" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetStartPeriod"></a>

```go
func ResetStartPeriod()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriodInput">StartPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod">StartPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `StartPeriodInput`<sup>Optional</sup> <a name="StartPeriodInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriodInput"></a>

```go
func StartPeriodInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `StartPeriod`<sup>Required</sup> <a name="StartPeriod" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod"></a>

```go
func StartPeriod() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftContainerGroupDefinitionSupportContainerDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get"></a>

```go
func Get(index *f64) GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get"></a>

```go
func Get(index *f64) GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetContainerPath">ResetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetInstancePath">ResetInstancePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetContainerPath` <a name="ResetContainerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetContainerPath"></a>

```go
func ResetContainerPath()
```

##### `ResetInstancePath` <a name="ResetInstancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetInstancePath"></a>

```go
func ResetInstancePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPathInput">ContainerPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePathInput">InstancePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath">InstancePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `ContainerPathInput`<sup>Optional</sup> <a name="ContainerPathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPathInput"></a>

```go
func ContainerPathInput() *string
```

- *Type:* *string

---

##### `InstancePathInput`<sup>Optional</sup> <a name="InstancePathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePathInput"></a>

```go
func InstancePathInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `InstancePath`<sup>Required</sup> <a name="InstancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath"></a>

```go
func InstancePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn">PutDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride">PutEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities">PutLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints">PutMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration">PutPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEnvironmentOverride">ResetEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetLinuxCapabilities">ResetLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMemoryHardLimitMebibytes">ResetMemoryHardLimitMebibytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMountPoints">ResetMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetPortConfiguration">ResetPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetResolvedImageDigest">ResetResolvedImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetVcpu">ResetVcpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDependsOn` <a name="PutDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn"></a>

```go
func PutDependsOn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvironmentOverride` <a name="PutEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride"></a>

```go
func PutEnvironmentOverride(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck"></a>

```go
func PutHealthCheck(value GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---

##### `PutLinuxCapabilities` <a name="PutLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities"></a>

```go
func PutLinuxCapabilities(value GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---

##### `PutMountPoints` <a name="PutMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints"></a>

```go
func PutMountPoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPortConfiguration` <a name="PutPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration"></a>

```go
func PutPortConfiguration(value GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetContainerName"></a>

```go
func ResetContainerName()
```

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetDependsOn"></a>

```go
func ResetDependsOn()
```

##### `ResetEnvironmentOverride` <a name="ResetEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEnvironmentOverride"></a>

```go
func ResetEnvironmentOverride()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEssential"></a>

```go
func ResetEssential()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetHealthCheck"></a>

```go
func ResetHealthCheck()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetImageUri"></a>

```go
func ResetImageUri()
```

##### `ResetLinuxCapabilities` <a name="ResetLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetLinuxCapabilities"></a>

```go
func ResetLinuxCapabilities()
```

##### `ResetMemoryHardLimitMebibytes` <a name="ResetMemoryHardLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMemoryHardLimitMebibytes"></a>

```go
func ResetMemoryHardLimitMebibytes()
```

##### `ResetMountPoints` <a name="ResetMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMountPoints"></a>

```go
func ResetMountPoints()
```

##### `ResetPortConfiguration` <a name="ResetPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetPortConfiguration"></a>

```go
func ResetPortConfiguration()
```

##### `ResetResolvedImageDigest` <a name="ResetResolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetResolvedImageDigest"></a>

```go
func ResetResolvedImageDigest()
```

##### `ResetVcpu` <a name="ResetVcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetVcpu"></a>

```go
func ResetVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn">DependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride">EnvironmentOverride</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities">LinuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints">MountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration">PortConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverrideInput">EnvironmentOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essentialInput">EssentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilitiesInput">LinuxCapabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytesInput">MemoryHardLimitMebibytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPointsInput">MountPointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfigurationInput">PortConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigestInput">ResolvedImageDigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpuInput">VcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential">Essential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes">MemoryHardLimitMebibytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest">ResolvedImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu">Vcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn"></a>

```go
func DependsOn() GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a>

---

##### `EnvironmentOverride`<sup>Required</sup> <a name="EnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride"></a>

```go
func EnvironmentOverride() GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a>

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck"></a>

```go
func HealthCheck() GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a>

---

##### `LinuxCapabilities`<sup>Required</sup> <a name="LinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities"></a>

```go
func LinuxCapabilities() GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a>

---

##### `MountPoints`<sup>Required</sup> <a name="MountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints"></a>

```go
func MountPoints() GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a>

---

##### `PortConfiguration`<sup>Required</sup> <a name="PortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration"></a>

```go
func PortConfiguration() GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a>

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOnInput"></a>

```go
func DependsOnInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentOverrideInput`<sup>Optional</sup> <a name="EnvironmentOverrideInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverrideInput"></a>

```go
func EnvironmentOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essentialInput"></a>

```go
func EssentialInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheckInput"></a>

```go
func HealthCheckInput() interface{}
```

- *Type:* interface{}

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `LinuxCapabilitiesInput`<sup>Optional</sup> <a name="LinuxCapabilitiesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilitiesInput"></a>

```go
func LinuxCapabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `MemoryHardLimitMebibytesInput`<sup>Optional</sup> <a name="MemoryHardLimitMebibytesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytesInput"></a>

```go
func MemoryHardLimitMebibytesInput() *f64
```

- *Type:* *f64

---

##### `MountPointsInput`<sup>Optional</sup> <a name="MountPointsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPointsInput"></a>

```go
func MountPointsInput() interface{}
```

- *Type:* interface{}

---

##### `PortConfigurationInput`<sup>Optional</sup> <a name="PortConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfigurationInput"></a>

```go
func PortConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ResolvedImageDigestInput`<sup>Optional</sup> <a name="ResolvedImageDigestInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigestInput"></a>

```go
func ResolvedImageDigestInput() *string
```

- *Type:* *string

---

##### `VcpuInput`<sup>Optional</sup> <a name="VcpuInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpuInput"></a>

```go
func VcpuInput() *f64
```

- *Type:* *f64

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential"></a>

```go
func Essential() interface{}
```

- *Type:* interface{}

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `MemoryHardLimitMebibytes`<sup>Required</sup> <a name="MemoryHardLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes"></a>

```go
func MemoryHardLimitMebibytes() *f64
```

- *Type:* *f64

---

##### `ResolvedImageDigest`<sup>Required</sup> <a name="ResolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest"></a>

```go
func ResolvedImageDigest() *string
```

- *Type:* *string

---

##### `Vcpu`<sup>Required</sup> <a name="Vcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu"></a>

```go
func Vcpu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get"></a>

```go
func Get(index *f64) GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges">PutContainerPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resetContainerPortRanges">ResetContainerPortRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerPortRanges` <a name="PutContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges"></a>

```go
func PutContainerPortRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContainerPortRanges` <a name="ResetContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resetContainerPortRanges"></a>

```go
func ResetContainerPortRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges">ContainerPortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRangesInput">ContainerPortRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortRanges`<sup>Required</sup> <a name="ContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges"></a>

```go
func ContainerPortRanges() GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a>

---

##### `ContainerPortRangesInput`<sup>Optional</sup> <a name="ContainerPortRangesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRangesInput"></a>

```go
func ContainerPortRangesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionTagsList <a name="GameliftContainerGroupDefinitionTagsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftContainerGroupDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get"></a>

```go
func Get(index *f64) GameliftContainerGroupDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftContainerGroupDefinitionTagsOutputReference <a name="GameliftContainerGroupDefinitionTagsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gameliftcontainergroupdefinition"

gameliftcontainergroupdefinition.NewGameliftContainerGroupDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftContainerGroupDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



