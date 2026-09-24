# `sagemakerNotebookInstanceLifecycleConfig` Submodule <a name="`sagemakerNotebookInstanceLifecycleConfig` Submodule" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstanceLifecycleConfig <a name="SagemakerNotebookInstanceLifecycleConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.NewSagemakerNotebookInstanceLifecycleConfig(scope Construct, id *string, config SagemakerNotebookInstanceLifecycleConfigConfig) SagemakerNotebookInstanceLifecycleConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig">SagemakerNotebookInstanceLifecycleConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig">SagemakerNotebookInstanceLifecycleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate">PutOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart">PutOnStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetNotebookInstanceLifecycleConfigName">ResetNotebookInstanceLifecycleConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnCreate">ResetOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnStart">ResetOnStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOnCreate` <a name="PutOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate"></a>

```go
func PutOnCreate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOnStart` <a name="PutOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart"></a>

```go
func PutOnStart(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNotebookInstanceLifecycleConfigName` <a name="ResetNotebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetNotebookInstanceLifecycleConfigName"></a>

```go
func ResetNotebookInstanceLifecycleConfigName()
```

##### `ResetOnCreate` <a name="ResetOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnCreate"></a>

```go
func ResetOnCreate()
```

##### `ResetOnStart` <a name="ResetOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnStart"></a>

```go
func ResetOnStart()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.SagemakerNotebookInstanceLifecycleConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.SagemakerNotebookInstanceLifecycleConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.SagemakerNotebookInstanceLifecycleConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.SagemakerNotebookInstanceLifecycleConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerNotebookInstanceLifecycleConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerNotebookInstanceLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerNotebookInstanceLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn">NotebookInstanceLifecycleConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreate">OnCreate</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList">SagemakerNotebookInstanceLifecycleConfigOnCreateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStart">OnStart</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList">SagemakerNotebookInstanceLifecycleConfigOnStartList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList">SagemakerNotebookInstanceLifecycleConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigNameInput">NotebookInstanceLifecycleConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreateInput">OnCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStartInput">OnStartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName">NotebookInstanceLifecycleConfigName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotebookInstanceLifecycleConfigArn`<sup>Required</sup> <a name="NotebookInstanceLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn"></a>

```go
func NotebookInstanceLifecycleConfigArn() *string
```

- *Type:* *string

---

##### `OnCreate`<sup>Required</sup> <a name="OnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreate"></a>

```go
func OnCreate() SagemakerNotebookInstanceLifecycleConfigOnCreateList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList">SagemakerNotebookInstanceLifecycleConfigOnCreateList</a>

---

##### `OnStart`<sup>Required</sup> <a name="OnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStart"></a>

```go
func OnStart() SagemakerNotebookInstanceLifecycleConfigOnStartList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList">SagemakerNotebookInstanceLifecycleConfigOnStartList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tags"></a>

```go
func Tags() SagemakerNotebookInstanceLifecycleConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList">SagemakerNotebookInstanceLifecycleConfigTagsList</a>

---

##### `NotebookInstanceLifecycleConfigNameInput`<sup>Optional</sup> <a name="NotebookInstanceLifecycleConfigNameInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigNameInput"></a>

```go
func NotebookInstanceLifecycleConfigNameInput() *string
```

- *Type:* *string

---

##### `OnCreateInput`<sup>Optional</sup> <a name="OnCreateInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreateInput"></a>

```go
func OnCreateInput() interface{}
```

- *Type:* interface{}

---

##### `OnStartInput`<sup>Optional</sup> <a name="OnStartInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStartInput"></a>

```go
func OnStartInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `NotebookInstanceLifecycleConfigName`<sup>Required</sup> <a name="NotebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName"></a>

```go
func NotebookInstanceLifecycleConfigName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceLifecycleConfigConfig <a name="SagemakerNotebookInstanceLifecycleConfigConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

&sagemakernotebookinstancelifecycleconfig.SagemakerNotebookInstanceLifecycleConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	NotebookInstanceLifecycleConfigName: *string,
	OnCreate: interface{},
	OnStart: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.notebookInstanceLifecycleConfigName">NotebookInstanceLifecycleConfigName</a></code> | <code>*string</code> | The name of the lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onCreate">OnCreate</a></code> | <code>interface{}</code> | A shell script that runs only once, when you create a notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onStart">OnStart</a></code> | <code>interface{}</code> | A shell script that runs every time you start a notebook instance, including when you create the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotebookInstanceLifecycleConfigName`<sup>Optional</sup> <a name="NotebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.notebookInstanceLifecycleConfigName"></a>

```go
NotebookInstanceLifecycleConfigName *string
```

- *Type:* *string

The name of the lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#notebook_instance_lifecycle_config_name SagemakerNotebookInstanceLifecycleConfig#notebook_instance_lifecycle_config_name}

---

##### `OnCreate`<sup>Optional</sup> <a name="OnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onCreate"></a>

```go
OnCreate interface{}
```

- *Type:* interface{}

A shell script that runs only once, when you create a notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_create SagemakerNotebookInstanceLifecycleConfig#on_create}

---

##### `OnStart`<sup>Optional</sup> <a name="OnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onStart"></a>

```go
OnStart interface{}
```

- *Type:* interface{}

A shell script that runs every time you start a notebook instance, including when you create the notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_start SagemakerNotebookInstanceLifecycleConfig#on_start}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#tags SagemakerNotebookInstanceLifecycleConfig#tags}

---

### SagemakerNotebookInstanceLifecycleConfigOnCreate <a name="SagemakerNotebookInstanceLifecycleConfigOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

&sagemakernotebookinstancelifecycleconfig.SagemakerNotebookInstanceLifecycleConfigOnCreate {
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}.

---

### SagemakerNotebookInstanceLifecycleConfigOnStart <a name="SagemakerNotebookInstanceLifecycleConfigOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

&sagemakernotebookinstancelifecycleconfig.SagemakerNotebookInstanceLifecycleConfigOnStart {
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}.

---

### SagemakerNotebookInstanceLifecycleConfigTags <a name="SagemakerNotebookInstanceLifecycleConfigTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

&sagemakernotebookinstancelifecycleconfig.SagemakerNotebookInstanceLifecycleConfigTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#key SagemakerNotebookInstanceLifecycleConfig#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#value SagemakerNotebookInstanceLifecycleConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerNotebookInstanceLifecycleConfigOnCreateList <a name="SagemakerNotebookInstanceLifecycleConfigOnCreateList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.NewSagemakerNotebookInstanceLifecycleConfigOnCreateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerNotebookInstanceLifecycleConfigOnCreateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get"></a>

```go
func Get(index *f64) SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.NewSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resetContent"></a>

```go
func ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerNotebookInstanceLifecycleConfigOnStartList <a name="SagemakerNotebookInstanceLifecycleConfigOnStartList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.NewSagemakerNotebookInstanceLifecycleConfigOnStartList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerNotebookInstanceLifecycleConfigOnStartList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get"></a>

```go
func Get(index *f64) SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.NewSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resetContent"></a>

```go
func ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerNotebookInstanceLifecycleConfigTagsList <a name="SagemakerNotebookInstanceLifecycleConfigTagsList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.NewSagemakerNotebookInstanceLifecycleConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerNotebookInstanceLifecycleConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get"></a>

```go
func Get(index *f64) SagemakerNotebookInstanceLifecycleConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerNotebookInstanceLifecycleConfigTagsOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakernotebookinstancelifecycleconfig"

sagemakernotebookinstancelifecycleconfig.NewSagemakerNotebookInstanceLifecycleConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerNotebookInstanceLifecycleConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



