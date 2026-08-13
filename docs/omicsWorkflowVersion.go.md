# `omicsWorkflowVersion` Submodule <a name="`omicsWorkflowVersion` Submodule" id="@cdktn/provider-awscc.omicsWorkflowVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsWorkflowVersion <a name="OmicsWorkflowVersion" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version awscc_omics_workflow_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsworkflowversion"

omicsworkflowversion.NewOmicsWorkflowVersion(scope Construct, id *string, config OmicsWorkflowVersionConfig) OmicsWorkflowVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig">OmicsWorkflowVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig">OmicsWorkflowVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate">PutParameterTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDefinitionUri">ResetDefinitionUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetMain">ResetMain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetParameterTemplate">ResetParameterTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageCapacity">ResetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetWorkflowBucketOwnerId">ResetWorkflowBucketOwnerId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameterTemplate` <a name="PutParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate"></a>

```go
func PutParameterTemplate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetAccelerators"></a>

```go
func ResetAccelerators()
```

##### `ResetDefinitionUri` <a name="ResetDefinitionUri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDefinitionUri"></a>

```go
func ResetDefinitionUri()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetMain` <a name="ResetMain" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetMain"></a>

```go
func ResetMain()
```

##### `ResetParameterTemplate` <a name="ResetParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetParameterTemplate"></a>

```go
func ResetParameterTemplate()
```

##### `ResetStorageCapacity` <a name="ResetStorageCapacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageCapacity"></a>

```go
func ResetStorageCapacity()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWorkflowBucketOwnerId` <a name="ResetWorkflowBucketOwnerId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetWorkflowBucketOwnerId"></a>

```go
func ResetWorkflowBucketOwnerId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsWorkflowVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsworkflowversion"

omicsworkflowversion.OmicsWorkflowVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsworkflowversion"

omicsworkflowversion.OmicsWorkflowVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsworkflowversion"

omicsworkflowversion.OmicsWorkflowVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsworkflowversion"

omicsworkflowversion.OmicsWorkflowVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OmicsWorkflowVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OmicsWorkflowVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OmicsWorkflowVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OmicsWorkflowVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplate">ParameterTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap">OmicsWorkflowVersionParameterTemplateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUriInput">DefinitionUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.mainInput">MainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplateInput">ParameterTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionNameInput">VersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerIdInput">WorkflowBucketOwnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowIdInput">WorkflowIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.accelerators">Accelerators</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUri">DefinitionUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.main">Main</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerId">WorkflowBucketOwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowId">WorkflowId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParameterTemplate`<sup>Required</sup> <a name="ParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplate"></a>

```go
func ParameterTemplate() OmicsWorkflowVersionParameterTemplateMap
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap">OmicsWorkflowVersionParameterTemplateMap</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.acceleratorsInput"></a>

```go
func AcceleratorsInput() *string
```

- *Type:* *string

---

##### `DefinitionUriInput`<sup>Optional</sup> <a name="DefinitionUriInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUriInput"></a>

```go
func DefinitionUriInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `MainInput`<sup>Optional</sup> <a name="MainInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.mainInput"></a>

```go
func MainInput() *string
```

- *Type:* *string

---

##### `ParameterTemplateInput`<sup>Optional</sup> <a name="ParameterTemplateInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplateInput"></a>

```go
func ParameterTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacityInput"></a>

```go
func StorageCapacityInput() *f64
```

- *Type:* *f64

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionNameInput"></a>

```go
func VersionNameInput() *string
```

- *Type:* *string

---

##### `WorkflowBucketOwnerIdInput`<sup>Optional</sup> <a name="WorkflowBucketOwnerIdInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerIdInput"></a>

```go
func WorkflowBucketOwnerIdInput() *string
```

- *Type:* *string

---

##### `WorkflowIdInput`<sup>Optional</sup> <a name="WorkflowIdInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowIdInput"></a>

```go
func WorkflowIdInput() *string
```

- *Type:* *string

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.accelerators"></a>

```go
func Accelerators() *string
```

- *Type:* *string

---

##### `DefinitionUri`<sup>Required</sup> <a name="DefinitionUri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUri"></a>

```go
func DefinitionUri() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `Main`<sup>Required</sup> <a name="Main" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.main"></a>

```go
func Main() *string
```

- *Type:* *string

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacity"></a>

```go
func StorageCapacity() *f64
```

- *Type:* *f64

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `WorkflowBucketOwnerId`<sup>Required</sup> <a name="WorkflowBucketOwnerId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerId"></a>

```go
func WorkflowBucketOwnerId() *string
```

- *Type:* *string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowId"></a>

```go
func WorkflowId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsWorkflowVersionConfig <a name="OmicsWorkflowVersionConfig" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsworkflowversion"

&omicsworkflowversion.OmicsWorkflowVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	VersionName: *string,
	WorkflowId: *string,
	Accelerators: *string,
	DefinitionUri: *string,
	Description: *string,
	Engine: *string,
	Main: *string,
	ParameterTemplate: interface{},
	StorageCapacity: *f64,
	StorageType: *string,
	Tags: *map[string]*string,
	WorkflowBucketOwnerId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.versionName">VersionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#version_name OmicsWorkflowVersion#version_name}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowId">WorkflowId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#workflow_id OmicsWorkflowVersion#workflow_id}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.accelerators">Accelerators</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#accelerators OmicsWorkflowVersion#accelerators}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.definitionUri">DefinitionUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#definition_uri OmicsWorkflowVersion#definition_uri}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#engine OmicsWorkflowVersion#engine}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.main">Main</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#main OmicsWorkflowVersion#main}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.parameterTemplate">ParameterTemplate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#parameter_template OmicsWorkflowVersion#parameter_template}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#storage_capacity OmicsWorkflowVersion#storage_capacity}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageType">StorageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#storage_type OmicsWorkflowVersion#storage_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A map of resource tags. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowBucketOwnerId">WorkflowBucketOwnerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#workflow_bucket_owner_id OmicsWorkflowVersion#workflow_bucket_owner_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.versionName"></a>

```go
VersionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#version_name OmicsWorkflowVersion#version_name}.

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowId"></a>

```go
WorkflowId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#workflow_id OmicsWorkflowVersion#workflow_id}.

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.accelerators"></a>

```go
Accelerators *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#accelerators OmicsWorkflowVersion#accelerators}.

---

##### `DefinitionUri`<sup>Optional</sup> <a name="DefinitionUri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.definitionUri"></a>

```go
DefinitionUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#definition_uri OmicsWorkflowVersion#definition_uri}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#engine OmicsWorkflowVersion#engine}.

---

##### `Main`<sup>Optional</sup> <a name="Main" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.main"></a>

```go
Main *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#main OmicsWorkflowVersion#main}.

---

##### `ParameterTemplate`<sup>Optional</sup> <a name="ParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.parameterTemplate"></a>

```go
ParameterTemplate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#parameter_template OmicsWorkflowVersion#parameter_template}.

---

##### `StorageCapacity`<sup>Optional</sup> <a name="StorageCapacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageCapacity"></a>

```go
StorageCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#storage_capacity OmicsWorkflowVersion#storage_capacity}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#storage_type OmicsWorkflowVersion#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A map of resource tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#tags OmicsWorkflowVersion#tags}

---

##### `WorkflowBucketOwnerId`<sup>Optional</sup> <a name="WorkflowBucketOwnerId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowBucketOwnerId"></a>

```go
WorkflowBucketOwnerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#workflow_bucket_owner_id OmicsWorkflowVersion#workflow_bucket_owner_id}.

---

### OmicsWorkflowVersionParameterTemplate <a name="OmicsWorkflowVersionParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsworkflowversion"

&omicsworkflowversion.OmicsWorkflowVersionParameterTemplate {
	Description: *string,
	Optional: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.optional">Optional</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#optional OmicsWorkflowVersion#optional}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}.

---

##### `Optional`<sup>Optional</sup> <a name="Optional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.optional"></a>

```go
Optional interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow_version#optional OmicsWorkflowVersion#optional}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsWorkflowVersionParameterTemplateMap <a name="OmicsWorkflowVersionParameterTemplateMap" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsworkflowversion"

omicsworkflowversion.NewOmicsWorkflowVersionParameterTemplateMap(terraformResource IInterpolatingParent, terraformAttribute *string) OmicsWorkflowVersionParameterTemplateMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get"></a>

```go
func Get(key *string) OmicsWorkflowVersionParameterTemplateOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OmicsWorkflowVersionParameterTemplateOutputReference <a name="OmicsWorkflowVersionParameterTemplateOutputReference" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsworkflowversion"

omicsworkflowversion.NewOmicsWorkflowVersionParameterTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) OmicsWorkflowVersionParameterTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetOptional">ResetOptional</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetOptional` <a name="ResetOptional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetOptional"></a>

```go
func ResetOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optionalInput">OptionalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optional">Optional</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `OptionalInput`<sup>Optional</sup> <a name="OptionalInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optionalInput"></a>

```go
func OptionalInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optional"></a>

```go
func Optional() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



