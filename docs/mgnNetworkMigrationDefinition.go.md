# `mgnNetworkMigrationDefinition` Submodule <a name="`mgnNetworkMigrationDefinition` Submodule" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MgnNetworkMigrationDefinition <a name="MgnNetworkMigrationDefinition" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition awscc_mgn_network_migration_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.NewMgnNetworkMigrationDefinition(scope Construct, id *string, config MgnNetworkMigrationDefinitionConfig) MgnNetworkMigrationDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig">MgnNetworkMigrationDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig">MgnNetworkMigrationDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putSourceConfigurations">PutSourceConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetNetwork">PutTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetS3Configuration">PutTargetS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetScopeTags">ResetScopeTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTargetDeployment">ResetTargetDeployment</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSourceConfigurations` <a name="PutSourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putSourceConfigurations"></a>

```go
func PutSourceConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putSourceConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetNetwork` <a name="PutTargetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetNetwork"></a>

```go
func PutTargetNetwork(value MgnNetworkMigrationDefinitionTargetNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a>

---

##### `PutTargetS3Configuration` <a name="PutTargetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetS3Configuration"></a>

```go
func PutTargetS3Configuration(value MgnNetworkMigrationDefinitionTargetS3Configuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetScopeTags` <a name="ResetScopeTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetScopeTags"></a>

```go
func ResetScopeTags()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetDeployment` <a name="ResetTargetDeployment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTargetDeployment"></a>

```go
func ResetTargetDeployment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.MgnNetworkMigrationDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.MgnNetworkMigrationDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.MgnNetworkMigrationDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.MgnNetworkMigrationDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MgnNetworkMigrationDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MgnNetworkMigrationDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MgnNetworkMigrationDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.networkMigrationDefinitionId">NetworkMigrationDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurations">SourceConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList">MgnNetworkMigrationDefinitionSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList">MgnNetworkMigrationDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference">MgnNetworkMigrationDefinitionTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3Configuration">TargetS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTagsInput">ScopeTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurationsInput">SourceConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeploymentInput">TargetDeploymentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3ConfigurationInput">TargetS3ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTags">ScopeTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeployment">TargetDeployment</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkMigrationDefinitionId`<sup>Required</sup> <a name="NetworkMigrationDefinitionId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.networkMigrationDefinitionId"></a>

```go
func NetworkMigrationDefinitionId() *string
```

- *Type:* *string

---

##### `SourceConfigurations`<sup>Required</sup> <a name="SourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurations"></a>

```go
func SourceConfigurations() MgnNetworkMigrationDefinitionSourceConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList">MgnNetworkMigrationDefinitionSourceConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tags"></a>

```go
func Tags() MgnNetworkMigrationDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList">MgnNetworkMigrationDefinitionTagsList</a>

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetwork"></a>

```go
func TargetNetwork() MgnNetworkMigrationDefinitionTargetNetworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference">MgnNetworkMigrationDefinitionTargetNetworkOutputReference</a>

---

##### `TargetS3Configuration`<sup>Required</sup> <a name="TargetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3Configuration"></a>

```go
func TargetS3Configuration() MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopeTagsInput`<sup>Optional</sup> <a name="ScopeTagsInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTagsInput"></a>

```go
func ScopeTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SourceConfigurationsInput`<sup>Optional</sup> <a name="SourceConfigurationsInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurationsInput"></a>

```go
func SourceConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetDeploymentInput`<sup>Optional</sup> <a name="TargetDeploymentInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeploymentInput"></a>

```go
func TargetDeploymentInput() *string
```

- *Type:* *string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetworkInput"></a>

```go
func TargetNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `TargetS3ConfigurationInput`<sup>Optional</sup> <a name="TargetS3ConfigurationInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3ConfigurationInput"></a>

```go
func TargetS3ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScopeTags`<sup>Required</sup> <a name="ScopeTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTags"></a>

```go
func ScopeTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetDeployment`<sup>Required</sup> <a name="TargetDeployment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeployment"></a>

```go
func TargetDeployment() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MgnNetworkMigrationDefinitionConfig <a name="MgnNetworkMigrationDefinitionConfig" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

&mgnnetworkmigrationdefinition.MgnNetworkMigrationDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SourceConfigurations: interface{},
	TargetNetwork: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork,
	TargetS3Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration,
	Description: *string,
	ScopeTags: *map[string]*string,
	Tags: interface{},
	TargetDeployment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | The name of the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.sourceConfigurations">SourceConfigurations</a></code> | <code>interface{}</code> | A list of source configurations for the network migration. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a></code> | The target network configuration including topology and CIDR ranges. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetS3Configuration">TargetS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a></code> | The S3 configuration for storing the target network artifacts. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.description">Description</a></code> | <code>*string</code> | A description of the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.scopeTags">ScopeTags</a></code> | <code>*map[string]*string</code> | Scope tags for the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetDeployment">TargetDeployment</a></code> | <code>*string</code> | The target deployment configuration for the migrated network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#name MgnNetworkMigrationDefinition#name}

---

##### `SourceConfigurations`<sup>Required</sup> <a name="SourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.sourceConfigurations"></a>

```go
SourceConfigurations interface{}
```

- *Type:* interface{}

A list of source configurations for the network migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_configurations MgnNetworkMigrationDefinition#source_configurations}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetNetwork"></a>

```go
TargetNetwork MgnNetworkMigrationDefinitionTargetNetwork
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a>

The target network configuration including topology and CIDR ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_network MgnNetworkMigrationDefinition#target_network}

---

##### `TargetS3Configuration`<sup>Required</sup> <a name="TargetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetS3Configuration"></a>

```go
TargetS3Configuration MgnNetworkMigrationDefinitionTargetS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a>

The S3 configuration for storing the target network artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_s3_configuration MgnNetworkMigrationDefinition#target_s3_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#description MgnNetworkMigrationDefinition#description}

---

##### `ScopeTags`<sup>Optional</sup> <a name="ScopeTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.scopeTags"></a>

```go
ScopeTags *map[string]*string
```

- *Type:* *map[string]*string

Scope tags for the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#scope_tags MgnNetworkMigrationDefinition#scope_tags}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#tags MgnNetworkMigrationDefinition#tags}

---

##### `TargetDeployment`<sup>Optional</sup> <a name="TargetDeployment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetDeployment"></a>

```go
TargetDeployment *string
```

- *Type:* *string

The target deployment configuration for the migrated network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_deployment MgnNetworkMigrationDefinition#target_deployment}

---

### MgnNetworkMigrationDefinitionSourceConfigurations <a name="MgnNetworkMigrationDefinitionSourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

&mgnnetworkmigrationdefinition.MgnNetworkMigrationDefinitionSourceConfigurations {
	SourceEnvironment: *string,
	SourceS3Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceEnvironment">SourceEnvironment</a></code> | <code>*string</code> | The source environment type. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceS3Configuration">SourceS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a></code> | S3 configuration for source network data. |

---

##### `SourceEnvironment`<sup>Required</sup> <a name="SourceEnvironment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceEnvironment"></a>

```go
SourceEnvironment *string
```

- *Type:* *string

The source environment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_environment MgnNetworkMigrationDefinition#source_environment}

---

##### `SourceS3Configuration`<sup>Required</sup> <a name="SourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceS3Configuration"></a>

```go
SourceS3Configuration MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

S3 configuration for source network data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_s3_configuration MgnNetworkMigrationDefinition#source_s3_configuration}

---

### MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration <a name="MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

&mgnnetworkmigrationdefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration {
	S3Bucket: *string,
	S3BucketOwner: *string,
	S3Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | The name of the S3 bucket containing source data. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3BucketOwner">S3BucketOwner</a></code> | <code>*string</code> | The AWS account ID of the S3 bucket owner. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Key">S3Key</a></code> | <code>*string</code> | The S3 key (path) for the source data. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

The name of the S3 bucket containing source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket MgnNetworkMigrationDefinition#s3_bucket}

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3BucketOwner"></a>

```go
S3BucketOwner *string
```

- *Type:* *string

The AWS account ID of the S3 bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket_owner MgnNetworkMigrationDefinition#s3_bucket_owner}

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Key"></a>

```go
S3Key *string
```

- *Type:* *string

The S3 key (path) for the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_key MgnNetworkMigrationDefinition#s3_key}

---

### MgnNetworkMigrationDefinitionTags <a name="MgnNetworkMigrationDefinitionTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

&mgnnetworkmigrationdefinition.MgnNetworkMigrationDefinitionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#key MgnNetworkMigrationDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#value MgnNetworkMigrationDefinition#value}

---

### MgnNetworkMigrationDefinitionTargetNetwork <a name="MgnNetworkMigrationDefinitionTargetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

&mgnnetworkmigrationdefinition.MgnNetworkMigrationDefinitionTargetNetwork {
	Topology: *string,
	InboundCidr: *string,
	InspectionCidr: *string,
	OutboundCidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.topology">Topology</a></code> | <code>*string</code> | The network topology type for the target environment. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inboundCidr">InboundCidr</a></code> | <code>*string</code> | The CIDR block for inbound traffic in the target network. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inspectionCidr">InspectionCidr</a></code> | <code>*string</code> | The CIDR block for inspection traffic in the target network. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.outboundCidr">OutboundCidr</a></code> | <code>*string</code> | The CIDR block for outbound traffic in the target network. |

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.topology"></a>

```go
Topology *string
```

- *Type:* *string

The network topology type for the target environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#topology MgnNetworkMigrationDefinition#topology}

---

##### `InboundCidr`<sup>Optional</sup> <a name="InboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inboundCidr"></a>

```go
InboundCidr *string
```

- *Type:* *string

The CIDR block for inbound traffic in the target network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#inbound_cidr MgnNetworkMigrationDefinition#inbound_cidr}

---

##### `InspectionCidr`<sup>Optional</sup> <a name="InspectionCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inspectionCidr"></a>

```go
InspectionCidr *string
```

- *Type:* *string

The CIDR block for inspection traffic in the target network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#inspection_cidr MgnNetworkMigrationDefinition#inspection_cidr}

---

##### `OutboundCidr`<sup>Optional</sup> <a name="OutboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.outboundCidr"></a>

```go
OutboundCidr *string
```

- *Type:* *string

The CIDR block for outbound traffic in the target network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#outbound_cidr MgnNetworkMigrationDefinition#outbound_cidr}

---

### MgnNetworkMigrationDefinitionTargetS3Configuration <a name="MgnNetworkMigrationDefinitionTargetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

&mgnnetworkmigrationdefinition.MgnNetworkMigrationDefinitionTargetS3Configuration {
	S3Bucket: *string,
	S3BucketOwner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | The name of the S3 bucket for target artifacts. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3BucketOwner">S3BucketOwner</a></code> | <code>*string</code> | The AWS account ID of the S3 bucket owner. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

The name of the S3 bucket for target artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket MgnNetworkMigrationDefinition#s3_bucket}

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3BucketOwner"></a>

```go
S3BucketOwner *string
```

- *Type:* *string

The AWS account ID of the S3 bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket_owner MgnNetworkMigrationDefinition#s3_bucket_owner}

---

## Classes <a name="Classes" id="Classes"></a>

### MgnNetworkMigrationDefinitionSourceConfigurationsList <a name="MgnNetworkMigrationDefinitionSourceConfigurationsList" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.NewMgnNetworkMigrationDefinitionSourceConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MgnNetworkMigrationDefinitionSourceConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.get"></a>

```go
func Get(index *f64) MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference <a name="MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.NewMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.putSourceS3Configuration">PutSourceS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceS3Configuration` <a name="PutSourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.putSourceS3Configuration"></a>

```go
func PutSourceS3Configuration(value MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.putSourceS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration">SourceS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironmentInput">SourceEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3ConfigurationInput">SourceS3ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment">SourceEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceS3Configuration`<sup>Required</sup> <a name="SourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration"></a>

```go
func SourceS3Configuration() MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a>

---

##### `SourceEnvironmentInput`<sup>Optional</sup> <a name="SourceEnvironmentInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironmentInput"></a>

```go
func SourceEnvironmentInput() *string
```

- *Type:* *string

---

##### `SourceS3ConfigurationInput`<sup>Optional</sup> <a name="SourceS3ConfigurationInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3ConfigurationInput"></a>

```go
func SourceS3ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceEnvironment`<sup>Required</sup> <a name="SourceEnvironment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment"></a>

```go
func SourceEnvironment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference <a name="MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.NewMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwnerInput">S3BucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3BucketOwnerInput`<sup>Optional</sup> <a name="S3BucketOwnerInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwnerInput"></a>

```go
func S3BucketOwnerInput() *string
```

- *Type:* *string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3KeyInput"></a>

```go
func S3KeyInput() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```go
func S3BucketOwner() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MgnNetworkMigrationDefinitionTagsList <a name="MgnNetworkMigrationDefinitionTagsList" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.NewMgnNetworkMigrationDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MgnNetworkMigrationDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.get"></a>

```go
func Get(index *f64) MgnNetworkMigrationDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MgnNetworkMigrationDefinitionTagsOutputReference <a name="MgnNetworkMigrationDefinitionTagsOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.NewMgnNetworkMigrationDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MgnNetworkMigrationDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MgnNetworkMigrationDefinitionTargetNetworkOutputReference <a name="MgnNetworkMigrationDefinitionTargetNetworkOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.NewMgnNetworkMigrationDefinitionTargetNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MgnNetworkMigrationDefinitionTargetNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInboundCidr">ResetInboundCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInspectionCidr">ResetInspectionCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetOutboundCidr">ResetOutboundCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInboundCidr` <a name="ResetInboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInboundCidr"></a>

```go
func ResetInboundCidr()
```

##### `ResetInspectionCidr` <a name="ResetInspectionCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInspectionCidr"></a>

```go
func ResetInspectionCidr()
```

##### `ResetOutboundCidr` <a name="ResetOutboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetOutboundCidr"></a>

```go
func ResetOutboundCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidrInput">InboundCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidrInput">InspectionCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidrInput">OutboundCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topologyInput">TopologyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr">InboundCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr">InspectionCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr">OutboundCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology">Topology</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InboundCidrInput`<sup>Optional</sup> <a name="InboundCidrInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidrInput"></a>

```go
func InboundCidrInput() *string
```

- *Type:* *string

---

##### `InspectionCidrInput`<sup>Optional</sup> <a name="InspectionCidrInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidrInput"></a>

```go
func InspectionCidrInput() *string
```

- *Type:* *string

---

##### `OutboundCidrInput`<sup>Optional</sup> <a name="OutboundCidrInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidrInput"></a>

```go
func OutboundCidrInput() *string
```

- *Type:* *string

---

##### `TopologyInput`<sup>Optional</sup> <a name="TopologyInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topologyInput"></a>

```go
func TopologyInput() *string
```

- *Type:* *string

---

##### `InboundCidr`<sup>Required</sup> <a name="InboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr"></a>

```go
func InboundCidr() *string
```

- *Type:* *string

---

##### `InspectionCidr`<sup>Required</sup> <a name="InspectionCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr"></a>

```go
func InspectionCidr() *string
```

- *Type:* *string

---

##### `OutboundCidr`<sup>Required</sup> <a name="OutboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr"></a>

```go
func OutboundCidr() *string
```

- *Type:* *string

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology"></a>

```go
func Topology() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference <a name="MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mgnnetworkmigrationdefinition"

mgnnetworkmigrationdefinition.NewMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwnerInput">S3BucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3BucketOwnerInput`<sup>Optional</sup> <a name="S3BucketOwnerInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwnerInput"></a>

```go
func S3BucketOwnerInput() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```go
func S3BucketOwner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



