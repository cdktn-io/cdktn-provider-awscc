# `elasticacheGlobalReplicationGroup` Submodule <a name="`elasticacheGlobalReplicationGroup` Submodule" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheGlobalReplicationGroup <a name="ElasticacheGlobalReplicationGroup" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group awscc_elasticache_global_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroup(scope Construct, id *string, config ElasticacheGlobalReplicationGroupConfig) ElasticacheGlobalReplicationGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig">ElasticacheGlobalReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig">ElasticacheGlobalReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putMembers">PutMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putRegionalConfigurations">PutRegionalConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled">ResetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType">ResetCacheNodeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheParameterGroupName">ResetCacheParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalNodeGroupCount">ResetGlobalNodeGroupCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription">ResetGlobalReplicationGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupIdSuffix">ResetGlobalReplicationGroupIdSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetRegionalConfigurations">ResetRegionalConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMembers` <a name="PutMembers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putMembers"></a>

```go
func PutMembers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putMembers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRegionalConfigurations` <a name="PutRegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putRegionalConfigurations"></a>

```go
func PutRegionalConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putRegionalConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutomaticFailoverEnabled` <a name="ResetAutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled"></a>

```go
func ResetAutomaticFailoverEnabled()
```

##### `ResetCacheNodeType` <a name="ResetCacheNodeType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType"></a>

```go
func ResetCacheNodeType()
```

##### `ResetCacheParameterGroupName` <a name="ResetCacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheParameterGroupName"></a>

```go
func ResetCacheParameterGroupName()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetGlobalNodeGroupCount` <a name="ResetGlobalNodeGroupCount" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalNodeGroupCount"></a>

```go
func ResetGlobalNodeGroupCount()
```

##### `ResetGlobalReplicationGroupDescription` <a name="ResetGlobalReplicationGroupDescription" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription"></a>

```go
func ResetGlobalReplicationGroupDescription()
```

##### `ResetGlobalReplicationGroupIdSuffix` <a name="ResetGlobalReplicationGroupIdSuffix" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupIdSuffix"></a>

```go
func ResetGlobalReplicationGroupIdSuffix()
```

##### `ResetRegionalConfigurations` <a name="ResetRegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetRegionalConfigurations"></a>

```go
func ResetRegionalConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ElasticacheGlobalReplicationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ElasticacheGlobalReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheGlobalReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.members">Members</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList">ElasticacheGlobalReplicationGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurations">RegionalConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput">AutomaticFailoverEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput">CacheNodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupNameInput">CacheParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCountInput">GlobalNodeGroupCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput">GlobalReplicationGroupDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput">GlobalReplicationGroupIdSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.membersInput">MembersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurationsInput">RegionalConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType">CacheNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCount">GlobalNodeGroupCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription">GlobalReplicationGroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix">GlobalReplicationGroupIdSuffix</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GlobalReplicationGroupId`<sup>Required</sup> <a name="GlobalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId"></a>

```go
func GlobalReplicationGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.members"></a>

```go
func Members() ElasticacheGlobalReplicationGroupMembersList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList">ElasticacheGlobalReplicationGroupMembersList</a>

---

##### `RegionalConfigurations`<sup>Required</sup> <a name="RegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurations"></a>

```go
func RegionalConfigurations() ElasticacheGlobalReplicationGroupRegionalConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="AutomaticFailoverEnabledInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput"></a>

```go
func AutomaticFailoverEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CacheNodeTypeInput`<sup>Optional</sup> <a name="CacheNodeTypeInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput"></a>

```go
func CacheNodeTypeInput() *string
```

- *Type:* *string

---

##### `CacheParameterGroupNameInput`<sup>Optional</sup> <a name="CacheParameterGroupNameInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupNameInput"></a>

```go
func CacheParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `GlobalNodeGroupCountInput`<sup>Optional</sup> <a name="GlobalNodeGroupCountInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCountInput"></a>

```go
func GlobalNodeGroupCountInput() *f64
```

- *Type:* *f64

---

##### `GlobalReplicationGroupDescriptionInput`<sup>Optional</sup> <a name="GlobalReplicationGroupDescriptionInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput"></a>

```go
func GlobalReplicationGroupDescriptionInput() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupIdSuffixInput`<sup>Optional</sup> <a name="GlobalReplicationGroupIdSuffixInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput"></a>

```go
func GlobalReplicationGroupIdSuffixInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.membersInput"></a>

```go
func MembersInput() interface{}
```

- *Type:* interface{}

---

##### `RegionalConfigurationsInput`<sup>Optional</sup> <a name="RegionalConfigurationsInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurationsInput"></a>

```go
func RegionalConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled"></a>

```go
func AutomaticFailoverEnabled() interface{}
```

- *Type:* interface{}

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType"></a>

```go
func CacheNodeType() *string
```

- *Type:* *string

---

##### `CacheParameterGroupName`<sup>Required</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupName"></a>

```go
func CacheParameterGroupName() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `GlobalNodeGroupCount`<sup>Required</sup> <a name="GlobalNodeGroupCount" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCount"></a>

```go
func GlobalNodeGroupCount() *f64
```

- *Type:* *f64

---

##### `GlobalReplicationGroupDescription`<sup>Required</sup> <a name="GlobalReplicationGroupDescription" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

```go
func GlobalReplicationGroupDescription() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupIdSuffix`<sup>Required</sup> <a name="GlobalReplicationGroupIdSuffix" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix"></a>

```go
func GlobalReplicationGroupIdSuffix() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheGlobalReplicationGroupConfig <a name="ElasticacheGlobalReplicationGroupConfig" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

&elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Members: interface{},
	AutomaticFailoverEnabled: interface{},
	CacheNodeType: *string,
	CacheParameterGroupName: *string,
	Engine: *string,
	EngineVersion: *string,
	GlobalNodeGroupCount: *f64,
	GlobalReplicationGroupDescription: *string,
	GlobalReplicationGroupIdSuffix: *string,
	RegionalConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.members">Members</a></code> | <code>interface{}</code> | The replication groups that comprise the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>interface{}</code> | AutomaticFailoverEnabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType">CacheNodeType</a></code> | <code>*string</code> | The cache node type of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>*string</code> | Cache parameter group name to use for the new engine version. This parameter cannot be modified independently. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engine">Engine</a></code> | <code>*string</code> | The engine of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | The engine version of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalNodeGroupCount">GlobalNodeGroupCount</a></code> | <code>*f64</code> | Indicates the number of node groups in the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription">GlobalReplicationGroupDescription</a></code> | <code>*string</code> | The optional description of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix">GlobalReplicationGroupIdSuffix</a></code> | <code>*string</code> | The suffix name of a Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.regionalConfigurations">RegionalConfigurations</a></code> | <code>interface{}</code> | Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.members"></a>

```go
Members interface{}
```

- *Type:* interface{}

The replication groups that comprise the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#members ElasticacheGlobalReplicationGroup#members}

---

##### `AutomaticFailoverEnabled`<sup>Optional</sup> <a name="AutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```go
AutomaticFailoverEnabled interface{}
```

- *Type:* interface{}

AutomaticFailoverEnabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}

---

##### `CacheNodeType`<sup>Optional</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType"></a>

```go
CacheNodeType *string
```

- *Type:* *string

The cache node type of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}

---

##### `CacheParameterGroupName`<sup>Optional</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheParameterGroupName"></a>

```go
CacheParameterGroupName *string
```

- *Type:* *string

Cache parameter group name to use for the new engine version. This parameter cannot be modified independently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#cache_parameter_group_name ElasticacheGlobalReplicationGroup#cache_parameter_group_name}

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

The engine of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#engine ElasticacheGlobalReplicationGroup#engine}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

The engine version of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}

---

##### `GlobalNodeGroupCount`<sup>Optional</sup> <a name="GlobalNodeGroupCount" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalNodeGroupCount"></a>

```go
GlobalNodeGroupCount *f64
```

- *Type:* *f64

Indicates the number of node groups in the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#global_node_group_count ElasticacheGlobalReplicationGroup#global_node_group_count}

---

##### `GlobalReplicationGroupDescription`<sup>Optional</sup> <a name="GlobalReplicationGroupDescription" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription"></a>

```go
GlobalReplicationGroupDescription *string
```

- *Type:* *string

The optional description of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}

---

##### `GlobalReplicationGroupIdSuffix`<sup>Optional</sup> <a name="GlobalReplicationGroupIdSuffix" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix"></a>

```go
GlobalReplicationGroupIdSuffix *string
```

- *Type:* *string

The suffix name of a Global Datastore.

Amazon ElastiCache automatically applies a prefix to the Global Datastore ID when it is created. Each AWS Region has its own prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}

---

##### `RegionalConfigurations`<sup>Optional</sup> <a name="RegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.regionalConfigurations"></a>

```go
RegionalConfigurations interface{}
```

- *Type:* interface{}

Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#regional_configurations ElasticacheGlobalReplicationGroup#regional_configurations}

---

### ElasticacheGlobalReplicationGroupMembers <a name="ElasticacheGlobalReplicationGroupMembers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

&elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroupMembers {
	ReplicationGroupId: *string,
	ReplicationGroupRegion: *string,
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | Regionally unique identifier for the member i.e. ReplicationGroupId. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>*string</code> | The AWS region of the Global Datastore member. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.role">Role</a></code> | <code>*string</code> | Indicates the role of the member, primary or secondary. |

---

##### `ReplicationGroupId`<sup>Optional</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupId"></a>

```go
ReplicationGroupId *string
```

- *Type:* *string

Regionally unique identifier for the member i.e. ReplicationGroupId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#replication_group_id ElasticacheGlobalReplicationGroup#replication_group_id}

---

##### `ReplicationGroupRegion`<sup>Optional</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupRegion"></a>

```go
ReplicationGroupRegion *string
```

- *Type:* *string

The AWS region of the Global Datastore member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#replication_group_region ElasticacheGlobalReplicationGroup#replication_group_region}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.role"></a>

```go
Role *string
```

- *Type:* *string

Indicates the role of the member, primary or secondary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#role ElasticacheGlobalReplicationGroup#role}

---

### ElasticacheGlobalReplicationGroupRegionalConfigurations <a name="ElasticacheGlobalReplicationGroupRegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

&elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroupRegionalConfigurations {
	ReplicationGroupId: *string,
	ReplicationGroupRegion: *string,
	ReshardingConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | The replication group id of the Global Datastore member. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>*string</code> | The AWS region of the Global Datastore member. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.reshardingConfigurations">ReshardingConfigurations</a></code> | <code>interface{}</code> | A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster. |

---

##### `ReplicationGroupId`<sup>Optional</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupId"></a>

```go
ReplicationGroupId *string
```

- *Type:* *string

The replication group id of the Global Datastore member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#replication_group_id ElasticacheGlobalReplicationGroup#replication_group_id}

---

##### `ReplicationGroupRegion`<sup>Optional</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupRegion"></a>

```go
ReplicationGroupRegion *string
```

- *Type:* *string

The AWS region of the Global Datastore member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#replication_group_region ElasticacheGlobalReplicationGroup#replication_group_region}

---

##### `ReshardingConfigurations`<sup>Optional</sup> <a name="ReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.reshardingConfigurations"></a>

```go
ReshardingConfigurations interface{}
```

- *Type:* interface{}

A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#resharding_configurations ElasticacheGlobalReplicationGroup#resharding_configurations}

---

### ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

&elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations {
	NodeGroupId: *string,
	PreferredAvailabilityZones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.nodeGroupId">NodeGroupId</a></code> | <code>*string</code> | Unique identifier for the Node Group. This is either auto-generated by ElastiCache (4-digit id) or a user supplied id. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>*[]*string</code> | A list of preferred availability zones for the nodes of new node groups. |

---

##### `NodeGroupId`<sup>Optional</sup> <a name="NodeGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.nodeGroupId"></a>

```go
NodeGroupId *string
```

- *Type:* *string

Unique identifier for the Node Group. This is either auto-generated by ElastiCache (4-digit id) or a user supplied id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#node_group_id ElasticacheGlobalReplicationGroup#node_group_id}

---

##### `PreferredAvailabilityZones`<sup>Optional</sup> <a name="PreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.preferredAvailabilityZones"></a>

```go
PreferredAvailabilityZones *[]*string
```

- *Type:* *[]*string

A list of preferred availability zones for the nodes of new node groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_global_replication_group#preferred_availability_zones ElasticacheGlobalReplicationGroup#preferred_availability_zones}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheGlobalReplicationGroupMembersList <a name="ElasticacheGlobalReplicationGroupMembersList" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroupMembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheGlobalReplicationGroupMembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.get"></a>

```go
func Get(index *f64) ElasticacheGlobalReplicationGroupMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheGlobalReplicationGroupMembersOutputReference <a name="ElasticacheGlobalReplicationGroupMembersOutputReference" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroupMembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheGlobalReplicationGroupMembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupId">ResetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupRegion">ResetReplicationGroupRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicationGroupId` <a name="ResetReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupId"></a>

```go
func ResetReplicationGroupId()
```

##### `ResetReplicationGroupRegion` <a name="ResetReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupRegion"></a>

```go
func ResetReplicationGroupRegion()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetRole"></a>

```go
func ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupIdInput">ReplicationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegionInput">ReplicationGroupRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationGroupIdInput`<sup>Optional</sup> <a name="ReplicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupIdInput"></a>

```go
func ReplicationGroupIdInput() *string
```

- *Type:* *string

---

##### `ReplicationGroupRegionInput`<sup>Optional</sup> <a name="ReplicationGroupRegionInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegionInput"></a>

```go
func ReplicationGroupRegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupId"></a>

```go
func ReplicationGroupId() *string
```

- *Type:* *string

---

##### `ReplicationGroupRegion`<sup>Required</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegion"></a>

```go
func ReplicationGroupRegion() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsList <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsList" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroupRegionalConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheGlobalReplicationGroupRegionalConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.get"></a>

```go
func Get(index *f64) ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.putReshardingConfigurations">PutReshardingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupId">ResetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupRegion">ResetReplicationGroupRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReshardingConfigurations">ResetReshardingConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReshardingConfigurations` <a name="PutReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.putReshardingConfigurations"></a>

```go
func PutReshardingConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.putReshardingConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetReplicationGroupId` <a name="ResetReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupId"></a>

```go
func ResetReplicationGroupId()
```

##### `ResetReplicationGroupRegion` <a name="ResetReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupRegion"></a>

```go
func ResetReplicationGroupRegion()
```

##### `ResetReshardingConfigurations` <a name="ResetReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReshardingConfigurations"></a>

```go
func ResetReshardingConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurations">ReshardingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupIdInput">ReplicationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegionInput">ReplicationGroupRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurationsInput">ReshardingConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReshardingConfigurations`<sup>Required</sup> <a name="ReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurations"></a>

```go
func ReshardingConfigurations() ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList</a>

---

##### `ReplicationGroupIdInput`<sup>Optional</sup> <a name="ReplicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupIdInput"></a>

```go
func ReplicationGroupIdInput() *string
```

- *Type:* *string

---

##### `ReplicationGroupRegionInput`<sup>Optional</sup> <a name="ReplicationGroupRegionInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegionInput"></a>

```go
func ReplicationGroupRegionInput() *string
```

- *Type:* *string

---

##### `ReshardingConfigurationsInput`<sup>Optional</sup> <a name="ReshardingConfigurationsInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurationsInput"></a>

```go
func ReshardingConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupId"></a>

```go
func ReplicationGroupId() *string
```

- *Type:* *string

---

##### `ReplicationGroupRegion`<sup>Required</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegion"></a>

```go
func ReplicationGroupRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get"></a>

```go
func Get(index *f64) ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetNodeGroupId">ResetNodeGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetPreferredAvailabilityZones">ResetPreferredAvailabilityZones</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeGroupId` <a name="ResetNodeGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetNodeGroupId"></a>

```go
func ResetNodeGroupId()
```

##### `ResetPreferredAvailabilityZones` <a name="ResetPreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetPreferredAvailabilityZones"></a>

```go
func ResetPreferredAvailabilityZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupIdInput">NodeGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZonesInput">PreferredAvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupId">NodeGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeGroupIdInput`<sup>Optional</sup> <a name="NodeGroupIdInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupIdInput"></a>

```go
func NodeGroupIdInput() *string
```

- *Type:* *string

---

##### `PreferredAvailabilityZonesInput`<sup>Optional</sup> <a name="PreferredAvailabilityZonesInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZonesInput"></a>

```go
func PreferredAvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NodeGroupId`<sup>Required</sup> <a name="NodeGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupId"></a>

```go
func NodeGroupId() *string
```

- *Type:* *string

---

##### `PreferredAvailabilityZones`<sup>Required</sup> <a name="PreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZones"></a>

```go
func PreferredAvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



